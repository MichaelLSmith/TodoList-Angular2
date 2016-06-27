"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var todo_data_service_1 = require('./todo-data.service');
var todo_data_1 = require('./todo-data');
//when user adds a new todo, it is added to the todos array in todo-data.ts
//the todo-types array is displayed in the <select> option in the todo-form
var TodoFormComponent = (function () {
    function TodoFormComponent(todoDataService) {
        this.todoDataService = todoDataService;
        this.types = todo_data_1.types;
        // model = new Todo(1, 'Hair Cut', this.types[0], false);
        // todos: any[] = [this.model, new Todo(2, 'Buy Milk', this.types[2], false)];
        this.submitted = false;
    }
    TodoFormComponent.prototype.ngOnInit = function () {
        this.todos = this.todoDataService.getTodos();
    };
    TodoFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    Object.defineProperty(TodoFormComponent.prototype, "diagnostic", {
        //delete when finished
        get: function () { return JSON.stringify(this.todos); },
        enumerable: true,
        configurable: true
    });
    TodoFormComponent = __decorate([
        core_1.Component({
            selector: 'todo-form',
            templateUrl: 'app/html-templates/todo-form.component.html',
            providers: [todo_data_service_1.TodoDataService]
        }), 
        __metadata('design:paramtypes', [todo_data_service_1.TodoDataService])
    ], TodoFormComponent);
    return TodoFormComponent;
}());
exports.TodoFormComponent = TodoFormComponent;
//# sourceMappingURL=todo-form.component.js.map