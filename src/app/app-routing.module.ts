import { NotFoundComponent } from './features/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./features/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('./features/registration/registration.module').then(
        m => m.RegistrationModule
      )
  },
  {
    path: 'price',
    loadChildren: () =>
      import('./features/price-table/price-table.module').then(
        m => m.PriceTableModule
      ),
    // add guard for redirect to price table
    canLoad: [AuthGuard]
  },
  { path: '', redirectTo: 'price', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
