import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  isRunning = false;

  constructor(public navCtrl: NavController) {}

  buttonPressed(event) {
    this.isRunning = ! this.isRunning;
  }

}
