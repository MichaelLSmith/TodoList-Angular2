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
var todo_1 = require('./todo');
var TodoFormComponent = (function () {
    function TodoFormComponent() {
        this.types = ['Personal', 'Work', 'Chore'];
        this.model = new todo_1.Todo(1, 'Hair Cut', this.types[0], false);
        this.submitted = false;
    }
    TodoFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    Object.defineProperty(TodoFormComponent.prototype, "diagnostic", {
        //delete when finished
        get: function () {
            return JSON.stringify(this.model);
        },
        enumerable: true,
        configurable: true
    });
    TodoFormComponent = __decorate([
        core_1.Component({
            selector: 'todo-form',
            templateUrl: 'app/html-templates/todo-form.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TodoFormComponent);
    return TodoFormComponent;
}());
exports.TodoFormComponent = TodoFormComponent;
//# sourceMappingURL=todo-form.component.js.map