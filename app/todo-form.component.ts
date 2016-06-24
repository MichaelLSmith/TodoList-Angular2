import { Component } from '@angular/core';
import { NgForm } from '@angular/common';

import { TodoDataService } from './todo-data.service'

import { Todo } from './todo';
import { types } from './todo-data';

console.log(types);


//when user adds a new todo, it is added to the todos array in todo-data.ts
//the todo-types array is displayed in the <select> option in the todo-form

@Component({
  selector: 'todo-form',
  templateUrl: 'app/html-templates/todo-form.component.html',

})
export class TodoFormComponent {

  // constructor(private types: types) { }

  todo: Todo;
  types: string[] = types;

  // model = new Todo(1, 'Hair Cut', this.types[0], false);

  // todos: any[] = [this.model, new Todo(2, 'Buy Milk', this.types[2], false)];

  // newTodo()

  submitted: boolean = false;

  onSubmit() {this.submitted = true; }

  //delete when finished
  get diagnostic() { return JSON.stringify(this.types); }
}
