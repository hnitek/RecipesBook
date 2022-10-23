import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../model/recipe.model';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

const BASE_PATH = environment.basePath;

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes$ = this.http.get<Recipe[]>(`${BASE_PATH}/recipes`);
  private filterRecipeSubject = new BehaviorSubject<Recipe>({title: ''});
  filterRecipesAction$ = this.filterRecipeSubject.asObservable();

  constructor(private http: HttpClient) { }

  updateFilters(criteria: Recipe): void {
    this.filterRecipeSubject.next(criteria);
  }
}
