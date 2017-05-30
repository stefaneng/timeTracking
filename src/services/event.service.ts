import { Injectable } from '@angular/core';
import { TimeEvent } from '../model/time-event';
import { Storage } from '@ionic/storage';

@Injectable()
export class EventService {

  constructor(private storage: Storage) {}

  getEvents(): Promise<TimeEvent[]> {
    return this.storage.get('events');
  }

  addEvent(timeEvent: TimeEvent): void {
    this.getEvents().then((oldEvents) => {
      if (oldEvents == null)  {
        oldEvents = [];
      }
      oldEvents.push(timeEvent);
      this.storage.set('events', oldEvents);
    })
  }

  clearEvents(): void {
    this.storage.set('events', []);
  }
}
