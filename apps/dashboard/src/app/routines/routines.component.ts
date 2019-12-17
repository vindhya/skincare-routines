import { Component, OnInit } from '@angular/core';
import { Routine, RoutinesService } from '@skincare/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-routines',
  templateUrl: './routines.component.html',
  styleUrls: ['./routines.component.css']
})
export class RoutinesComponent implements OnInit {
  // routines$: Observable<Routine[]>;
  routines$;
  selectedRoutine: Routine;

  constructor(private routinesService: RoutinesService) {}

  ngOnInit() {
    this.getRoutines();
  }

  selectRoutine(routine) {
    this.selectedRoutine = routine;
    console.log('SELECTED ROUTINE', routine);
  }

  getRoutines() {
    // the long way:
    // this.routinesService
    //   .all()
    //   .subscribe((result: any) => (this.routines = result));

    // the short way:
    this.routines$ = this.routinesService.all();
  }

  deleteRoutine(routine) {
    this.routinesService
      .delete(routine.id)
      .subscribe(result => this.getRoutines());
  }

  cancel() {
    this.selectRoutine(null);
  }
}
