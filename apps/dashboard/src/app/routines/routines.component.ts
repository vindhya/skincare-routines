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
  primaryColor = 'red';

  constructor(private routinesService: RoutinesService) {}

  ngOnInit() {
    this.getRoutines();
    this.resetRoutine();
  }

  selectRoutine(routine) {
    this.selectedRoutine = routine;
  }

  resetRoutine() {
    const emptyRoutine: Routine = {
      id: null,
      title: '',
      details: '',
      percentComplete: 0,
      approved: false
    };
    this.selectRoutine(emptyRoutine);
  }

  getRoutines() {
    // the long way:
    // this.routinesService
    //   .all()
    //   .subscribe((result: any) => (this.routines = result));

    // the short way:
    this.routines$ = this.routinesService.all();
  }

  saveRoutine(routine) {
    if(!routine.id) {
      this.createRoutine(routine);
    } else {
      this.updateRoutine(routine)
    }
  }

  createRoutine(routine) {
    this.routinesService
      .create(routine)
      .subscribe(result => {
        this.getRoutines();
        this.resetRoutine();
      });
  }

  updateRoutine(routine) {
    this.routinesService
      .update(routine)
      .subscribe(result => {
        this.getRoutines();
        this.resetRoutine();
      });
  }

  deleteRoutine(routine) {
    this.routinesService
      .delete(routine.id)
      .subscribe(result => this.getRoutines());
  }

  cancel() {
    this.resetRoutine();
  }
}
