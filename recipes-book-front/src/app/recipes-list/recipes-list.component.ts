import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest, map } from 'rxjs';
import { Recipe } from '../core/model/recipe.model';
import { RecipeService } from '../core/services/recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipesListComponent {
  recipes$ = this.recipeService.recipes$;
  filterRecipesAction$ = this.recipeService.filterRecipesAction$;
  filteredRecipes$ = combineLatest([this.recipes$, this.filterRecipesAction$]).pipe(
    map(([recipes, filter]: [Recipe[], Recipe]) => {
      return recipes.filter(recipe => recipe.title?.toLowerCase().indexOf(filter?.title?.toLowerCase() ?? '') != -1)
    })
  )

  constructor(private recipeService: RecipeService) { }
}
