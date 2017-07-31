import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeEditForm: FormGroup;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;

      }
    );

    this.recipeEditForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'imagePath': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.required]),
      'ingredients': new FormArray([])
    });
  }

}
