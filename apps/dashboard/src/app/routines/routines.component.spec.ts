import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutinesComponent } from './routines.component';
import { RoutinesListComponent } from './routines-list/routines-list.component';
import { RoutineDetailsComponent } from './routine-details/routine-details.component';
import { MaterialModule } from '@skincare/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RoutinesComponent', () => {
  let component: RoutinesComponent;
  let fixture: ComponentFixture<RoutinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
