import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '@skincare/ui-login';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'routines',
    loadChildren: () =>
      import('./routines/routines.module').then(m => m.RoutinesModule)
  },
  {
    path: 'brands',
    loadChildren: () =>
      import('./brands/brands.module').then(m => m.BrandsModule)
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
