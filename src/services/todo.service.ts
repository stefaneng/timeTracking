import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Todo } from '../model/todo';

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
      created: new Date(Date.now())
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
      created: new Date(Date.now())
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
}
