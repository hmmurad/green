import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { RecipeService } from './../../services/recipe.service';
import { Recipe } from './../../includes/recipe';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {


  recipe: Recipe[];
  id: string;


  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {
  }


   ngOnInit() {

    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          console.log(this.id)
        }
      )
      this.recipeService.getRecipe(this.id)
        .subscribe(data => {
          this.recipe = data;
          console.log(data)
        })
    }



}
