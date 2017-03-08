import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe';
//import { RecipeItemComponent } from './recipe-item.component';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe ('Dummy', 'Dummy', 'http://www.pngall.com/wp-content/uploads/2016/03/Food-PNG.png', []),
    new Recipe ('Dummy', 'Dummy', 'http://www.pngall.com/wp-content/uploads/2016/03/Food-PNG.png', []),
    new Recipe ('Dummy', 'Dummy', 'http://www.pngall.com/wp-content/uploads/2016/03/Food-PNG.png', []),
    new Recipe ('Dummy', 'Dummy', 'http://www.pngall.com/wp-content/uploads/2016/03/Food-PNG.png', [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  //recipe = new Recipe ('Dummy', 'Dummy', 'http://www.pngall.com/wp-content/uploads/2016/03/Food-PNG.png');
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe); 
    console.log('**********', recipe);
  }

}
