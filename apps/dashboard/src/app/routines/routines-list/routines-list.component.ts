import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Routine } from '@skincare/core-data';

@Component({
  selector: 'app-routines-list',
  templateUrl: './routines-list.component.html',
  styleUrls: ['./routines-list.component.css']
})
export class RoutinesListComponent{
  @Input() routines: Routine[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
