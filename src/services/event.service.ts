import { Injectable } from '@angular/core';
import { TimeEvent } from '../model/time-event';

@Injectable()
export class EventService {
  events = [];

  getEvents(): Promise<TimeEvent[]> {
    return Promise.resolve(this.events);
  }

  addEvent(timeEvent: TimeEvent): void {
    this.events.push(timeEvent);
  }

  clearEvents(): void {
    this.events = [];
  }
}
