import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class TodoService {

  constructor(private storage: Storage) {}

}
