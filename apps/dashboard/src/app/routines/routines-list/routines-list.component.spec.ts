import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutinesListComponent } from './routines-list.component';
import { MaterialModule } from '@skincare/material';

describe('RoutinesListComponent', () => {
  let component: RoutinesListComponent;
  let fixture: ComponentFixture<RoutinesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RoutinesListComponent],
      imports: [MaterialModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutinesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
