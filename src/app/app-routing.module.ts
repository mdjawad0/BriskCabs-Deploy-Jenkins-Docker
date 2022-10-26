import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './aboutUs/aboutUs.component';
import { BookingComponent } from './booking/booking.component';
import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';
import { RideComponent } from './ride/ride.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'ride', component: RideComponent },
  { path: 'aboutus', component: AboutUsComponent },
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
