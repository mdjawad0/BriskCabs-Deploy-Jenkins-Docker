import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerUserData: any = {};
  validateName = false;
  validateUsername = false;
  validatePassword = false;
  validateRc = false;
  validateDl = false;
  validateVehicle = false;

  constructor(private _auth: AuthService) {}

  ngOnInit(): void {}

  registerUser() {
    console.log(this.registerUserData)
    if (this.registerUserData.name.trim() === '') {
      this.validateName = true;
      return;
    } else {
      this.validateName = false;
    }
    if (this.registerUserData.username.trim() === '') {
      this.validateUsername = true;
      return;
    }
    if (this.registerUserData.password.trim().length < 6) {
      this.validatePassword = true;
      return;
    }
    if (this.registerUserData.cabRider && this.registerUserData.registration_certificate.trim() === '') {
      this.validateRc = true;
      return;
    }
    if (this.registerUserData.cabRider && this.registerUserData.vehicle.trim() === '') {
      this.validateVehicle = true;
      return;
    }
    if (this.registerUserData.cabRider && this.registerUserData.DL.trim() === '') {
      this.validateDl = true;
      return;
    }

    this._auth.registerUser(this.registerUserData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}
