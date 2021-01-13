import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';



const routes: Routes = [
{ path: '', redirectTo:'/recipes', pathMatch:'full' },
{ path: 'recipes', component: RecipesComponent, children:[
  { path: '', component: RecipeStartComponent},
  {path: ':recipeId', component: RecipeDetailComponent}
]},
{ path: 'shopping-list', children:[
  { path: '' , component: ShoppingListComponent},
  { path: 'shopping-list-edit', component: ShoppingListEditComponent }
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
