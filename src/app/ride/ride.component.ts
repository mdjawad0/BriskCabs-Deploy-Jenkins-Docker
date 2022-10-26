import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-ride',
  templateUrl: './ride.component.html',
  styleUrls: ['./ride.component.scss'],
})
export class RideComponent implements OnInit , OnDestroy{
  rideDetails = {
    id: 0,
    from: '',
    to: '',
    driverName: '',
    vehicleNumber: '',
    vehicleModel: '',
    arrivalTime: '',
    duration: '',
    driverRating: 0,
    fare: 0,
  };
  constructor(private router: Router,private _auth: AuthService) {}

  ngOnInit(): void {
    if (sessionStorage.getItem("rideDetails") != null) {
      let rideDetails : any = sessionStorage.getItem("rideDetails")
      this.rideDetails = JSON.parse(rideDetails);
    }
  }

  ngOnDestroy() {
    sessionStorage.removeItem("rideDetails")
  }
}
