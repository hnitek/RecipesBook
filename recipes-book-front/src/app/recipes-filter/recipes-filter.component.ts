import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { RecipeService } from '../core/services/recipe.service';

@Component({
  selector: 'app-recipes-filter',
  templateUrl: './recipes-filter.component.html',
  styleUrls: ['./recipes-filter.component.scss']
})
export class RecipesFilterComponent {
  recipeFilters = this.fb.group({
    title: new FormControl('', { nonNullable: true }),
    // category: [''],
    // ingredient: [''],
    // tags: [''],
    // prepTime: [''],
    // cookingTime: ['']
  });

  constructor(private fb: FormBuilder, private recipeService: RecipeService) { }

  filterResults(): void {
    this.recipeService.updateFilters(this.recipeFilters.value);
  }

}
