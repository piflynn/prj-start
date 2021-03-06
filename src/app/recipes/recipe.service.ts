import {
  Injectable
} from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

import { ShoppingListService } from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs/Subject';

@Injectable()

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();


  private recipes: Recipe[] = [
    new Recipe('chili', 'really good chili recipe', 'https://search.chow.com/thumbnail/800/600/www.chowstatic.com/assets/recipe_photos/10828_smoked_chili.jpg',
      [
        new Ingredient('Beef', 2),
        new Ingredient('Beans', 3),
        new Ingredient('Onion', 2),
        new Ingredient('Garlic', 1),
        new Ingredient('Chile', 2)
      ]),
    new Recipe('steak', 'cheap ass steak well done', 'https://i.warosu.org/data/ck/img/0049/62/1385026446734.jpg',
      [
        new Ingredient('shit steak', 1)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    // return only a copy ... use slice()
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  removeRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }


}
