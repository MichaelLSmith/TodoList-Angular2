"use strict";
//this file stores the data temporarily while the todo-data.service saves and retrieves the data from local storage.
// @Injectable()
exports.types = [
    'Personal',
    'Work',
    'Chore'
];
exports.todos = [
    { id: 1, name: 'Hair Cut', type: exports.types[0], completed: true },
    { id: 2, name: 'Buy Milk', type: exports.types[2], completed: false }
];
//# sourceMappingURL=todo-data.js.map