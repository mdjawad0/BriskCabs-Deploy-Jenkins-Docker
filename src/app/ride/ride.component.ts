import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ride',
  templateUrl: './ride.component.html',
  styleUrls: ['./ride.component.scss'],
})
export class RideComponent implements OnInit {
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
  isAdmin = window.localStorage.getItem('isAdmin');
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.isAdmin === 'true') {
      this.router.navigate(['/admin']);
    }
  }
}
