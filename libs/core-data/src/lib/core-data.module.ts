import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutinesService } from './routines/routines.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [RoutinesService]
})
export class CoreDataModule {}
