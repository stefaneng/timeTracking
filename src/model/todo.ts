import { UUID } from 'angular2-uuid';

export class Todo {
  title: String;
  completed: Boolean;
  created: Date;
  completedOn: Date;
  id: UUID;
}
