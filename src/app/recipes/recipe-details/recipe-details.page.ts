import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {
 loadedRecipe: Recipe;
  constructor(
// tslint:disable-next-line: max-line-length
    private activatedRoute: ActivatedRoute , private recipeService: RecipesService , private router: Router , private alertController: AlertController)
    { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMAp => {
      if(!paramMAp.has('recipeId')){
        return;
      }
      const recipeId = paramMAp.get('recipeId');
      this.loadedRecipe = this.recipeService.getRecipe(recipeId);
    });
  }
  onDelete() {
    this.alertController.create({
      header: 'Are you sure?' ,
      message: 'Do you really want to delete the recipe?' ,
      buttons: [{
        text: 'cancel',
        role: 'cancel'
      }, {
        text: 'Delete' ,
        handler: () => {
          this.recipeService.deleteRecipe(this.loadedRecipe.id);
          this.router.navigate(['/recipes']);
        }
      }]
    }).then(alert => { alert.present(); });
   }
}
