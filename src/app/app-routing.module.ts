import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AdminComponent } from './admin/admin.component';
import { BookingComponent } from './booking/booking.component';
import { LandingComponent } from './landing/landing.component';
// import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RideComponent } from './ride/ride.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  // { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'ride', component: RideComponent },
  // { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  // LoginComponent,
  RegisterComponent,
  BookingComponent,
  LandingComponent,
];
