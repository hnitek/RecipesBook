import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../model/recipe.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const BASE_PATH = environment.basePath;

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes$ = this.http.get<Recipe[]>(`${BASE_PATH}/recipes`);

  constructor(private http: HttpClient) { }
}
