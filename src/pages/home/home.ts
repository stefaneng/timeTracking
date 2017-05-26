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

  events: Array<TimeEvent>;
  startTime: Date;

  constructor(public navCtrl: NavController, private eventService: EventService) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this.events = this.eventService.getEvents();
  }

  clearPressed(event) {
    this.eventService.clearEvents
  }
  startPressed(event) {
    this.isRunning = true;
    this.startTime = new Date(Date.now());
  }

  stopPressed(event) {
    this.isRunning = false;
    let endTime = new Date(Date.now());
    let name = "Event " + (this.events.length + 1);
    this.events.push({
      name: name,
      startTime: this.startTime,
      endTime: endTime
    });
    this.startTime = null;
  }
}
