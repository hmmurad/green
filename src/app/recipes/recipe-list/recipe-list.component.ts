import { Component, OnInit } from '@angular/core';
import { RecipeService } from './../../services/recipe.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes = [
    // {title: 'Biriyani', description: 'this is very tasty dish', imageUrl: 'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/10/pumpkin-pad-thai-recipe.jpg?fit=1200%2C879&ssl=1'},
    // {title: 'Panta vat', description: 'this is another very tasty dish', imageUrl: 'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/10/pumpkin-pad-thai-recipe.jpg?fit=1200%2C879&ssl=1'},
  ]
  // recipes;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.recipeService.getRecipes()
      .pipe(map(res => {
        const recipeArry = []
        for(const key in res){
          if(res.hasOwnProperty(key)){
            recipeArry.push({id:key, ...res[key]})
          }
        }
        return recipeArry
      }))
      .subscribe(
        (res) => {
        this.recipes = res
      })
  }

  onAddRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }


}
