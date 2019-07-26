import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
 private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Tamato Rice',
  // tslint:disable-next-line: max-line-length
    imageurl: 'https://images.food52.com/9myR8GaUI43Li1wXAIauoaXkLLA=/768x511/f82f0e2b-40c4-4bf5-8a09-8344af91e989--2018-0612_tomato-rice-tamatar-biryani_3x2_bobbi-lin_12348.jpg',
    ingredients: ['tamato', 'onions', 'salt', 'red chili poweder']
    },
    {
      id: 'r2',
      title: 'Pallow Rice',
  // tslint:disable-next-line: max-line-length
  imageurl: 'https://www.thespruceeats.com/thmb/iIenCbnoLy-LRV7wIFfUjtaMr3s=/400x300/filters:no_upscale():max_bytes(150000):strip_icc()/4557653237_6ab05ae729_o-56a510385f9b58b7d0dabdba.jpg',
      ingredients: ['rice', 'vegitables' , 'salt' , 'chili', 'masala']
    }
  ];
  constructor() { }

getAllRecipe()  {
  return [...this.recipes];
}

getRecipe(recipeId: string) {
  return {...this.recipes.find(recipe => {
    return recipe.id === recipeId;
  })
};
}
 deleteRecipe(recipeId: string) {
   this.recipes = this.recipes.filter(recipe => {
     return recipe.id !== recipeId;
   });
 }

}