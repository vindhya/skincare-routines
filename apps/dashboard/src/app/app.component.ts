import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Skincare Routines';

  links = [
    { path: '/', icon: 'home', title: 'Home' },
    { path: '/routines', icon: 'face', title: 'Routines' },
    { path: '/brands', icon: 'star', title: 'Brands' }
  ];
}
