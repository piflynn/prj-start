import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('chili', 'really good chili recipe', 'https://search.chow.com/thumbnail/800/600/www.chowstatic.com/assets/recipe_photos/10828_smoked_chili.jpg'),
    new Recipe('steak', 'cheap ass steak well done', 'https://i.warosu.org/data/ck/img/0049/62/1385026446734.jpg')
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }



}
