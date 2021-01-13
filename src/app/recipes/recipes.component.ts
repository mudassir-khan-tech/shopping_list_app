import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  recipSelected: Recipe;
  constructor(private recipeService : RecipeService) { }

  ngOnInit(): void {
     this.recipeService.selectedRecipes.subscribe((recipe : Recipe) =>{
      this.recipSelected = recipe;
     })
  }


}
