import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineDetailsComponent } from './routine-details.component';
import { MaterialModule } from '@skincare/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routine } from '@skincare/core-data';

describe('RoutineDetailsComponent', () => {
  let component: RoutineDetailsComponent;
  let fixture: ComponentFixture<RoutineDetailsComponent>;
  const emptyRoutine: Routine = {
    id: null,
    title: '',
    details: '',
    percentComplete: 0,
    approved: false
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutineDetailsComponent ],
      imports: [MaterialModule, FormsModule, BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutineDetailsComponent);
    component = fixture.componentInstance;
    component.currentRoutine = emptyRoutine;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
