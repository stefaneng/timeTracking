import { Injectable } from '@angular/core';
import { TimeEvent } from '../model/time-event';

@Injectable()
export class EventService {
  events = [];

  getEvents(): Array<TimeEvent> {
    return this.events;
  }

  addEvent(timeEvent: TimeEvent): void {
    this.events.push(timeEvent);
  }

  clearEvents(): void {
    this.events = [];
  }
}
