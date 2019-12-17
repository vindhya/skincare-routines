import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutinesComponent } from './routines.component';

const routes: Routes = [{ path: '', component: RoutinesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutinesRoutingModule {}
