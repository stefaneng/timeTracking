import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Todo } from '../model/todo';
import { UUID } from 'angular2-uuid';

@Injectable()
export class TodoService {
  todos: Todo[];

  constructor(private storage: Storage) {
    this.getTodos().then((todos) => {
      this.todos = todos || [];
    })
  }

  getTodos(): Promise<Todo[]> {
    return this.storage.get('todos');
  }

  private updateTodos() {
    this.storage.set('todos', this.todos);
  }

  // Adds a new Todo with todoString as title
  // Puts it at the end of the todo list
  addBack(todoString: String): Todo[] {
    let todo = {
      title: todoString,
      completed: false,
      created: new Date(Date.now()),
      id: UUID.UUID()
    };
    this.todos = [
      ...this.todos,
      todo
    ];
    this.updateTodos();
    return this.todos;
  }

  // Adds a new Todo with todoString as title
  // Puts it at the front of the todo list
  addFront(todoString: String): Todo[] {
    let todo = {
      title: todoString,
      completed: false,
      created: new Date(Date.now()),
      id: UUID.UUID()
    };
    this.todos = [
      todo,
      ...this.todos
    ];
    this.updateTodos();
    return this.todos;
  }

  removeIndex(index): Todo[] {
    this.todos = [
      ...this.todos.splice(0, index),
      ...this.todos.splice(index + 1)
    ];

    this.updateTodos();
    return this.todos;
  }

  updateTodo(todo: Todo) {
    let foundTodoIndex = this.todos.findIndex((t) => t.id === todo.id);
    this.todos = [
      ...this.todos.slice(0, foundTodoIndex),
      todo,
      ...this.todos.slice(foundTodoIndex + 1)
    ]
    this.updateTodos();
  }
}
