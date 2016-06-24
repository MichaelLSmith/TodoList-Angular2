import { Injectable } from '@angular/core';

import { Todo } from './todo';

//this file stores the data temporarily while the todo-data.service saves and retrieves the data from local storage.

// @Injectable()
export let types: string[] = [
    'Personal',
    'Work',
    'Chore'
]

export let todos: Todo[] = [
    { id: 1, name: 'Hair Cut', type: types[0], completed: true },
    { id: 2, name: 'Buy Milk', type: types[2], completed: false }
]
