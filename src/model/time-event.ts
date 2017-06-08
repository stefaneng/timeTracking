import { UUID } from 'angular2-uuid';

// Represents a timed event
// For now just start and stop time
export class TimeEvent {
  name: String;
  startTime: Date;
  endTime: Date;
  todoId: UUID;
}
