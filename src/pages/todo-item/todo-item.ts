import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Todo } from '../../model/todo';
import { TimeEvent } from '../../model/time-event';
import { EventService } from '../../services/event.service';

@IonicPage()
@Component({
  selector: 'page-todo-item',
  templateUrl: 'todo-item.html',
})
export class TodoItemPage {
  todoItem: Todo;
  events: TimeEvent[];
  startTime: Date;
  isRunning: Boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private eventService: EventService) {
    this.todoItem = navParams.get("todoItem");
    eventService.getEventsId(this.todoItem.id).then((events) => {
      this.events = events || [];
    });
  }

  ionViewDidLoad() {}

  addEvent(event: TimeEvent) {
    // Add event to top of the list
    this.events = [
      event,
      ...this.events
    ];
    this.eventService.saveEventsId(this.todoItem.id, this.events);
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
