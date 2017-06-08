import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Todo } from '../../model/todo';
import { TimeEvent } from '../../model/time-event';

@IonicPage()
@Component({
  selector: 'page-todo-item',
  templateUrl: 'todo-item.html',
})
export class TodoItemPage {
  todoItem: Todo;
  events: TimeEvent[] = [];
  startTime: Date;
  isRunning: Boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.todoItem = navParams.get("todoItem");
  }

  ionViewDidLoad() {}

  addEvent(event: TimeEvent) {
    this.events.push(event);
  }

  stopPressed(event) {
    this.isRunning = false;
    let endTime = new Date(Date.now());
    let name = `${this.todoItem.title} ${this.events.length + 1}`;
    this.addEvent({
      name: name,
      startTime: this.startTime,
      endTime: endTime,
      todoId: this.todoItem.id
    });
    this.startTime = null;
  }

  startPressed(event) {
    this.isRunning = true;
    this.startTime = new Date(Date.now());
  }
}
