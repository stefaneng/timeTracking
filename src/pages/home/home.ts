import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TimeEvent } from '../../model/time-event'
import { EventService } from '../../services/event.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  isRunning = false;

  events: TimeEvent[];
  startTime: Date;

  constructor(public navCtrl: NavController, private eventService: EventService) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this.eventService.getEvents().then((events) => {
      if (events == null) {
        this.events = [];
      }
      else {
        this.events = events;
      }
    }).catch((err) => {
      console.error("Error in getting events: ", err);
      this.events = [];
    });
  }

  addEvent(event: TimeEvent) {
    this.eventService.addEvent(event);
    this.events.push(event);
  }

  clearPressed(event) {
    this.eventService.clearEvents();
    this.events = [];
  }

  startPressed(event) {
    this.isRunning = true;
    this.startTime = new Date(Date.now());
  }

  stopPressed(event) {
    this.isRunning = false;
    let endTime = new Date(Date.now());
    let name = "Event " + (this.events.length + 1);
    this.addEvent({
      name: name,
      startTime: this.startTime,
      endTime: endTime,
      todoId: null
    });
    this.startTime = null;
  }

  updateEventName(eventName, index) {
    this.eventService.updateEventName(eventName, index);
  }
}
