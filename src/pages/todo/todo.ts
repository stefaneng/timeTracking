import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../model/todo';
import { TodoItemPage } from '../todo-item/todo-item';

@IonicPage()
@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html',
})
export class TodoPage implements OnInit {

  todos: Todo[];
  newTodo: String = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private todoService: TodoService) {}

  ionViewDidLoad() {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().then((todos) => {
      this.todos = todos;
    });
  }

  // Updates a single todo with TodoService
  updateTodo(todo: Todo) {
    this.todoService.updateTodo(todo);
  }

  completeTodo(todo: Todo) {
    if (todo.completed) {
      todo.completedDate = new Date(Date.now());
    } else {
      todo.completedDate = null;
    }
    this.updateTodo(todo);
  }

  enterTodo() {
    this.todos = this.todoService.addFront(this.newTodo);
    this.newTodo = "";
  }

  removeTodo(index) {
    this.todos = this.todoService.removeIndex(index);
  }

  displayItemDetails(todo) {
    this.navCtrl.push(TodoItemPage, {
      'todoItem': todo
    });
  }
}
