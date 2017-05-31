import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodoPage } from './todo';
import { TodoService } from '../../services/todo.service';

@NgModule({
  declarations: [
    TodoPage
  ],
  imports: [
    IonicPageModule.forChild(TodoPage),
  ],
  exports: [
    TodoPage
  ],
  providers: [
    TodoService
  ]
})
export class TodoPageModule {}
