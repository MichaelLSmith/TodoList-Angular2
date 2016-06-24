import { Injectable } from '@angular/core';

import { todos, types } from './todo-data';
import { Todo } from './todo';

@Injectable()
export class TodoDataService {

    todos: Todo[];
    types: string[];

    getTodos() {
        return todos;
    }

    getTodo() {
        
    }

//Read and Write from Todos[] in the ./todo-data.ts
//Save and Retrieve todo-data from local storage
}
