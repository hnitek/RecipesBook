import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RecipeService } from '../core/services/recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipesListComponent {
  recipes$ = this.recipeService.recipes$;

  constructor(private recipeService: RecipeService) { }
}
