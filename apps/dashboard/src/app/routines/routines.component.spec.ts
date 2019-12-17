import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutinesComponent } from './routines.component';
import { RoutinesListComponent } from './routines-list/routines-list.component';
import { RoutineDetailsComponent } from './routine-details/routine-details.component';
import { MaterialModule } from '@skincare/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { Routine, RoutinesService } from '@skincare/core-data';
import { By } from '@angular/platform-browser';

describe('RoutinesComponent', () => {
  // 1: create local test members
  let component: RoutinesComponent;
  let fixture: ComponentFixture<RoutinesComponent>;
  let de: DebugElement;
  let routinesService: RoutinesService;

  const mockRoutineService = {};
  const emptyRoutine: Routine = {
    id: null,
    title: '',
    details: '',
    percentComplete: 0,
    approved: false
  };

  // 2: instantiate test bed
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [
        RoutinesComponent,
        RoutinesListComponent,
        RoutineDetailsComponent
      ],
      imports: [
        MaterialModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule
      ],
      providers: [{ provide: RoutinesService, useValue: mockRoutineService }]
    }).createComponent(RoutinesComponent); // instantiate the fixture

    // get THE component instance
    component = fixture.componentInstance;
    // get the debug element aka the element the component lives on
    de = fixture.debugElement;
    // get service instance
    routinesService = de.injector.get(RoutinesService);
    // angular does not automatically trigger changes so that we can test things
    // before binding - manually force change detection
    fixture.detectChanges();
  });

  // 3: write the actual tests
  it('should have a primaryColor of red', () => {
    expect(component.primaryColor).toBe('red');
  });

  it('should select a routine', () => {
    component.selectRoutine(emptyRoutine);
    expect(component.selectedRoutine).toEqual(emptyRoutine);
  });

  it('should display primaryColor', () => {
    const h1 = de.query(By.css('h1'));
    expect(h1.nativeElement.textContent).toBe('red');
  });

  it('should update h1 to new primaryColor', () => {
    const h1 = de.query(By.css('h1'));
    component.primaryColor = 'black';
    fixture.detectChanges();
    console.log('h1', h1.nativeElement.innerText);
    expect(h1.nativeElement.textContent).toBe('black');
  });
});
