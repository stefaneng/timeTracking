import { Injectable } from '@angular/core';
import { TimeEvent } from '../model/time-event';
import { Storage } from '@ionic/storage';
import { UUID } from 'angular2-uuid';

@Injectable()
export class EventService {

  constructor(private storage: Storage) {}

  getEventsId(id: UUID): Promise<TimeEvent[]> {
    let strId = id.toString();
    return new Promise((resolve) => {
      this.storage.get('events').then((events) => {
        if (events == null) {
          resolve([]);
        } else {
          resolve(events[strId]);
        }
      });
    });
  }

  saveEventsId(id: UUID, events: TimeEvent[]): Promise<any> {
    return new Promise((resolve) => {
        this.storage.get('events').then((eventsObj) => {
          let newEventsObj = eventsObj || {};
          newEventsObj[id.toString()] = events;
          resolve(this.storage.set('events', newEventsObj));
      });
    });
  }
}
