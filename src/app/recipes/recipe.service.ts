import { Injectable } from '@angular/core';

import { Recipe } from './recipe';
import { Ingredient } from '../shared';

@Injectable()
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe ('Dummy', 'Dummy', 'http://www.pngall.com/wp-content/uploads/2016/03/Food-PNG.png', [
      new Ingredient('frech fries', 2),
      new Ingredient('burger', 2)
    ]),
    new Recipe ('Dummy', 'Dummy', 'http://www.pngall.com/wp-content/uploads/2016/03/Food-PNG.png', []),
    new Recipe ('Dummy', 'Dummy', 'http://www.pngall.com/wp-content/uploads/2016/03/Food-PNG.png', []),
    new Recipe ('Dummy', 'Dummy', 'http://www.pngall.com/wp-content/uploads/2016/03/Food-PNG.png', [])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }
}
