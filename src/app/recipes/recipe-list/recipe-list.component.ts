import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('This is test recipe', 'This is a test description', 'https://images.squarespace-cdn.com/content/v1/4f3d96dfd09ad0913f907a5d/1426954430741-RXPHQC8CCZW7Y5PLHHNZ/ke17ZwdGBToddI8pDm48kF9aEDQaTpZHfWEO2zppK7Z7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UX7HUUwySjcPdRBGehEKrDf5zebfiuf9u6oCHzr2lsfYZD7bBzAwq_2wCJyqgJebgg/image-asset.jpeg?format=1500w')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
