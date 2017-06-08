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
        }
        resolve(events[strId]);
      });
    });
  }
}
