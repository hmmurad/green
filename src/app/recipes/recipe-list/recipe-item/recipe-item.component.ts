import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/includes/recipe';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {



  constructor( ) {



  }

  ngOnInit(): void {

  }



}
