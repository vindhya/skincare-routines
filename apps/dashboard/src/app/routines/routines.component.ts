import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routines',
  templateUrl: './routines.component.html',
  styleUrls: ['./routines.component.css']
})
export class RoutinesComponent implements OnInit {
  routines = [
    {
      id: '1',
      title: 'Morning Routine',
      details: 'This is a sample routine',
      percentComplete: 20,
      approved: false
    },
    {
      id: '2',
      title: 'Nighttime Routine',
      details: 'This is a sample routine',
      percentComplete: 40,
      approved: false
    },
    {
      id: '3',
      title: 'Weekend Nighttime Routine',
      details: 'This is a sample routine',
      percentComplete: 100,
      approved: true
    }
  ];
  selectedRoutine;

  constructor() {}

  ngOnInit() {}

  selectRoutine(routine) {
    this.selectedRoutine = routine;
    console.log('SELECTED ROUTINE', routine);
  }

  cancel() {
    this.selectRoutine(null);
  }
}
