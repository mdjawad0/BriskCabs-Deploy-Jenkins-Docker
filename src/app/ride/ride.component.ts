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
    id: 1,
    from: 'Gurgaon',
    to: 'Delhi',
    driverName: 'Rohit Sharma',
    vehicleNumber: 'DL128C',
    vehicleModel: 'M-MODEL',
    arrivalTime: '10:00 AM',
    duration: '42 mins',
    driverRating: 4.5,
    fare: 315,
  };
  constructor(private router: Router,private _auth: AuthService) {}

  ngOnInit(): void {
    if (sessionStorage.getItem("rideDetails") != null) {
      let rideDetails : any = sessionStorage.getItem("rideDetails")
      this.rideDetails = JSON.parse(rideDetails);
    }
  }

  storeBookingDetails(){
  console.log(this.rideDetails)
    this._auth.recordBooking(this.rideDetails).subscribe(
      (res) => {
      console.log("Ride Details saved successfully")
      },
      (err) => {
        console.log("Something went wrong")
      }
    );
}

  ngOnDestroy() {
    sessionStorage.removeItem("rideDetails")
  }
}
