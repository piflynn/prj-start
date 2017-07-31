import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService {
  shoppingListChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private shoppingList: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  getShoppingList() {
    return this.shoppingList.slice();
  }

  getIngredient(index: number) {
    return this.shoppingList[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.shoppingList.push(ingredient);
    this.shoppingListChanged.next(this.shoppingList.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.shoppingList.push(...ingredients);
    this.shoppingListChanged.next(this.shoppingList.slice());
  }

  deleteIngredient(index: number) {
    this.shoppingList.splice(index, 1);
    this.shoppingListChanged.next(this.shoppingList.slice());
  }

  updateIngredient(index: number, ingredient: Ingredient) {
    this.shoppingList[index] =  ingredient;
    this.shoppingListChanged.next(this.shoppingList.slice());
  }

}
