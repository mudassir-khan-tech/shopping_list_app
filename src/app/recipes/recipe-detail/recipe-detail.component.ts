import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit , AfterViewInit{
// @Input() selectedReipe: Recipe
selectedReipe : Recipe;
  constructor(private recipeService : RecipeService, private route: ActivatedRoute) { }
id: number
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) =>{
     this.id = +params['recipeId'];
      this.selectedReipe = this.recipeService.getRecipeItem(this.id)
    })

  }

  addToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.selectedReipe.ingredients)
  }
}
