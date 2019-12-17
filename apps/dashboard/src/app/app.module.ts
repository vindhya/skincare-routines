import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  NoopAnimationsModule,
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';

import { MaterialModule } from '@skincare/material';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UiLoginModule } from '@skincare/ui-login';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // NoopAnimationsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    UiLoginModule,
    // RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
