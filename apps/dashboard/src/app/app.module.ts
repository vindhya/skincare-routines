import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@skincare/material';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { RoutinesModule } from './routines/routines.module';
import { BrandsModule } from './brands/brands.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    NoopAnimationsModule,
    MaterialModule,
    HomeModule,
    RoutinesModule,
    BrandsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
