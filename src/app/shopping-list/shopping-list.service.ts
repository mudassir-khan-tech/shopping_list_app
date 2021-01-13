import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor() { }
  ingredients: Ingredient[] = [];

  getIngredients(){
    return this.ingredients.slice()
  }

  addItems(ingredient : Ingredient){
    console.log(ingredient)
    this.ingredients.push(ingredient)
  }

addIngredients(ingredient : Ingredient[]){
  this.ingredients.push(...ingredient)
}

}
