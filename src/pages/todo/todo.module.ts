import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodoPage } from './todo';

@NgModule({
  declarations: [
    TodoPage
  ],
  imports: [
    IonicPageModule.forChild(TodoPage),
  ],
  exports: [
    TodoPage
  ]
})
export class TodoPageModule {}
