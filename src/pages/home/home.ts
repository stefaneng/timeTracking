import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TimeEvent } from '../../model/time-event'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  isRunning = false;

  events: Array<TimeEvent> = [];
  startTime: Date;

  constructor(public navCtrl: NavController) {}

  startPressed(event) {
    this.isRunning = true;
    this.startTime = new Date(Date.now());
  }

  stopPressed(event) {
    this.isRunning = false;
    let endTime = new Date(Date.now());
    this.events.push({
      startTime: this.startTime,
      endTime: endTime
    });
    this.startTime = null;
  }
}
