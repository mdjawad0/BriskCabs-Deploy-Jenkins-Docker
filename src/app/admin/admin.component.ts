import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  userType: string = 'Driver';
  isAdmin = window.localStorage.getItem('isAdmin');

  driverList = [
    {
      id: 1,
      driverName: 'Rohit Sharma',
      vehicleNumber: 'DL128C',
      vehicleModel: 'M-MODEL',
      pic: 'https://st2.depositphotos.com/1372276/5324/i/600/depositphotos_53246545-stock-photo-portrait-taxi-driver-smile-car.jpg',
    },
    {
      id: 2,
      driverName: 'Ana James',
      vehicleNumber: 'UK528C',
      vehicleModel: 'M-MODEL',
      pic: 'https://www.keeptaxisalive.org/wp-content/uploads/2019/05/download-2.jpg',
    },
  ];
  customerList = [
    {
      id: 1,
      name: 'Karan Singh',
      age: 26,
      location: 'Bihar',
      pic: 'https://st2.depositphotos.com/1372276/5324/i/600/depositphotos_53246545-stock-photo-portrait-taxi-driver-smile-car.jpg',
    },
    {
      id: 2,
      name: 'Shiwani Agarwal',
      age: 24,
      location: 'Delhi',
      pic: 'https://www.keeptaxisalive.org/wp-content/uploads/2019/05/download-2.jpg',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.isAdmin === 'false') {
      this.router.navigate(['/']);
    }
  }

  onApprove(id: number) {
    // integrate api to approve driver with id
    console.log(`user with ID ${id} approved`);
  }

  onDecline(id: number) {
    // integrate api to decline driver with id
    console.log(`user with ID ${id} declined`);
  }
}
