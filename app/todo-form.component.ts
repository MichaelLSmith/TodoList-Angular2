import { Component } from '@angular/core';
import { NgForm} from '@angular/common';

import { Todo } from './todo';

@Component({
  selector: 'todo-form',
  templateUrl: 'app/html-templates/todo-form.component.html'
})
export class TodoFormComponent {

  types = ['Personal', 'Work', 'Chore'];

  model = new Todo(1, 'Hair Cut', this.types[0], false);

  submitted: false;

  onSubmit() {this.submitted = true; }

  //delete when finished
  get diagnostic() { return JSON.stringify(this.model); }

}
