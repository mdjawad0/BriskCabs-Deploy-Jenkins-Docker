import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginData: any = {};
  isUsernameInvalid = false;
  passwordInvalid = false;
  constructor(private _auth: AuthService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void { }

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
        console.log(res);
        if (res.status) {
          localStorage.setItem("isAdmin", res.data.isAdmin ? "true" : "false");
          localStorage.setItem("isLoggedIn", "true");
          const url = res.data.isAdmin ? "/admin" : "/booking";
          this.router.navigate([url])
        } else {
          this.toastr.error("Invalid credentials");
        }
        // localStorage.setItem('isAdmin', res.isAdmin);
        // res.isAdmin === 'true'
        //   ? this.router.navigate(['/admin'])
        //   : this.router.navigate(['/booking']);
      },
      (err) => {
        this.toastr.error("Something went wrong, Please try again");
      }
    );
  }
}
