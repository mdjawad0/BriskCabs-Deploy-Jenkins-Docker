import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  userType: string = 'drivers';
  isAdmin = window.localStorage.getItem('isAdmin');

  driverList: any = [
    {
      "id": "1",
      "age": 24,
      "name": "Nithi",
      "username": "User123",
      "address": null,
      "referralCode": null,
      "isCabRider": "yes",
      "panCard": null,
      "rc": null,
      "dl": null,
      "vehicle": null,
      "isAdmin": false
    },
  ];
  customerList: any = [
    {
      "id": "2",
      "age": 22,
      "name": "Rishabh",
      "username": "User123",
      "address": null,
      "referralCode": null,
      "isCabRider": "yes",
      "panCard": null,
      "rc": null,
      "dl": null,
      "vehicle": null,
      "isAdmin": false
    },
  ];

  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit(): void {
    if (this.isAdmin === 'false') {
      this.router.navigate(['/']);
    }

    this.getList(this.userType);
  }

  getList(userType: string) {
    this.adminService.getList(userType).subscribe({
      next: (res) => {
        if (userType === "customers") {
          this.customerList = res.data;
        } else {
          this.driverList = res.data;
        }


        console.log(res);
      },
      error: (error) => {
        console.log(error);
      }
    })
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
