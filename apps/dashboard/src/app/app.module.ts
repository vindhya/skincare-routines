import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import {
  NoopAnimationsModule,
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import { MaterialModule } from '@skincare/material';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { RoutinesModule } from './routines/routines.module';
import { BrandsModule } from './brands/brands.module';
import { AppRoutingModule } from './app-routing.module';
import { UiLoginModule } from '@skincare/ui-login';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // NoopAnimationsModule,
    BrowserAnimationsModule,
    MaterialModule,
    UiLoginModule,
    // RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
