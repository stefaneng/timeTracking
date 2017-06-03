import { UUID } from 'angular2-uuid';

export class Todo {
  title: String;
  completed: Boolean;
  completedDate: Date;
  created: Date;
  id: UUID;
}
