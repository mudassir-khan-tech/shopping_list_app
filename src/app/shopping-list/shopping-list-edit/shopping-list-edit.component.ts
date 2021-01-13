import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
 @ViewChild('nameInput') nameInputRef: ElementRef;
 @ViewChild('amountInput') amountInputRef: ElementRef;
 @Output() shoppingListItems  = new EventEmitter<Ingredient>();
  // ingerdientsArr :Ingredient[] = []
 constructor(private shopService : ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem(){
    const ingName =  this.nameInputRef.nativeElement.value;
    const ingAmount= this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount)
      this.shopService.addItems(newIngredient);
  }

}
