import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginData: any = {};
  isUsernameInvalid = false;
  passwordInvalid = false;
  constructor(private _auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  loginUser() {
    if (this.loginData.username.trim() === '') {
      this.isUsernameInvalid = true;
      return;
    }
    if (this.loginData.password.length < 6) {
      this.passwordInvalid = true;
      return;
    }
    this._auth.loginUser(this.loginData).subscribe(
      (res) => {
        localStorage.setItem('isAdmin', res.isAdmin);
        res.isAdmin === 'true'
          ? this.router.navigate(['/admin'])
          : this.router.navigate(['/booking']);
      },
      (err) => console.log(err)
    );
  }
}
