import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Todo } from '../../model/todo';

@IonicPage()
@Component({
  selector: 'page-todo-item',
  templateUrl: 'todo-item.html',
})
export class TodoItemPage {
  todoItem: Todo;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.todoItem = navParams.get("todoItem");
  }

  ionViewDidLoad() {}

}
