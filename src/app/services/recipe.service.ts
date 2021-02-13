import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../includes/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  url='https://mymenu-197f7.firebaseio.com/recipes.json';
  constructor( private http: HttpClient) { }


  recipe(recipe: Recipe) {
    return this.http.post<Recipe>(this.url, recipe)
  }


  getRecipes() {
    return this.http.get<Recipe>(this.url)
  }

  getRecipe(id: string){
    return this.http.get<Recipe[]>(this.url+id)
  }


}
