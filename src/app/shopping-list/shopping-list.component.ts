import { Component, OnInit, DoCheck } from '@angular/core';
import { Ingredient} from '../shared/ingredients.model'
import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, DoCheck {
ingredients: Ingredient[] = [];
  constructor(private shopService : ShoppingListService) { }

  ngOnInit(): void {
    // this.ingredients = this.shopService.getIngredients();
    // console.log('Inside Shopping lIst')
    // console.log(this.ingredients)
  }

  ngDoCheck(){
    this.ingredients = this.shopService.getIngredients();
    console.log('Inside Shopping lIst')
    console.log(this.ingredients)
}

}
