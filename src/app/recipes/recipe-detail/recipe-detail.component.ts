import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { ShoppingListService } from '../../shopping-list';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: []
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.slService.addItems(this.selectedRecipe.ingredients);
  }

}
