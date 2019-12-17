import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Routine } from '@skincare/core-data';

@Component({
  selector: 'app-routine-details',
  templateUrl: './routine-details.component.html',
  styleUrls: ['./routine-details.component.css']
})
export class RoutineDetailsComponent {
  currentRoutine: Routine;
  originalTitle;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set routine(value) {
    if (value) this.originalTitle = value.title;
    this.currentRoutine = Object.assign({}, value);
  }
}
