import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private shoppingListSer: ShoppingListService) { }

  selectedRecipes = new EventEmitter<Recipe>()
  private recipes: Recipe[] = [
    new Recipe('The Test Recipe', 'Testy recipe ever',
    'https://www.simplejoy.com/wp-content/uploads/2019/05/summer_salad-683x1024.jpg',
    [
      new Ingredient('meat', 2),
      new Ingredient('Burger',30)
    ]
    ),
    new Recipe('The Delicious Recipe', 'never eat before',
    'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe-480x270.jpg',
    [
      new Ingredient('french Fries', 1),
      new Ingredient('potato chilli',4)
    ]
    ),

  ]

  getRecipe(){
    return this.recipes.slice();
  }

  getRecipeItem(id){
    return this.recipes[id]
  }

  getShoppingIngredients(id){
    return this.recipes[id]['ingredients']
  }


  addIngredientsToShoppingList(ingredients : Ingredient[]){
    console.log('recipe service');
    console.log(ingredients)
   this.shoppingListSer.addIngredients(ingredients)
  }
}
