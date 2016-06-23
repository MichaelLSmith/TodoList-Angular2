import { Component } from '@angular/core';

import { TodoFormComponent } from './todo-form.component';

@Component({
  selector: 'my-app',
  template: '<todo-form></todo-form>',
  directives: [TodoFormComponent]
})
export class AppComponent { }
