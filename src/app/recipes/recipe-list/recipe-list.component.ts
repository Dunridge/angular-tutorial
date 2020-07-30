import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_1280.jpg'),
    new Recipe('A test recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_1280.jpg'),
    new Recipe('A test recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_1280.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
