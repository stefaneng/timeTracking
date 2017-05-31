import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Todo } from '../../model/todo';

@IonicPage()
@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html',
})
export class TodoPage {

  todos: Todo[] = [];
  newTodo: String = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {}

  enterTodo() {
    this.todos.push({
      title: this.newTodo,
      checked: false
    });
    this.newTodo = "";
  }
}
