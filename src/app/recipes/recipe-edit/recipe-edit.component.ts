import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Recipe } from 'src/app/includes/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  @ViewChild('recipeForm') recipeForm: NgForm;
  recipes;


  constructor( private recipeService: RecipeService) { }

  ngOnInit(): void {

  }

  onSubmit(recipe: Recipe) {
   this.recipeService.recipe(recipe)
    .subscribe( recipe => {
      this.recipes = recipe
    })

    this.recipeForm.reset();
  }
}
