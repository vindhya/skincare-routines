import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutinesRoutingModule } from './routines-routing.module';
import { RoutinesComponent } from './routines.component';
import { MaterialModule } from '@skincare/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RoutinesComponent],
  imports: [CommonModule, RoutinesRoutingModule, MaterialModule, FormsModule],
  exports: [RoutinesComponent]
})
export class RoutinesModule {}
