import { Component, OnInit, Input, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit, AfterViewInit {
@Input() recipe: Recipe;

@Input() index : number;
  constructor(private recipeService : RecipeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  // console.log(this.recipe)
  }
ngAfterViewInit(){
  console.log(this.recipe)
  console.log(this.index)
}


}
