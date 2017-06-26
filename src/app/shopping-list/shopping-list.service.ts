import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  shoppingListChanged = new EventEmitter<Ingredient[]>();

  private shoppingList: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  getShoppingList() {
    return this.shoppingList.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.shoppingList.push(ingredient);
    this.shoppingListChanged.emit(this.shoppingList.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.shoppingList.push(...ingredients);
    this.shoppingListChanged.emit(this.shoppingList.slice());
  }

  deleteIngredient(ingredient: Ingredient) {
    // this.shoppingList.pop(ingredient);
    // this.shoppingListChanged.emit(this.shoppingList.slice());

  }

  clearShoppingList() {
    this.shoppingList = [];
    this.shoppingListChanged.emit(this.shoppingList.slice());
  }

}
