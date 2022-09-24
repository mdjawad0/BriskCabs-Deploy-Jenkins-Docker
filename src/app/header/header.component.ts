import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  }

  logout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("isAdmin");
    this.isLoggedIn = false;
    this.router.navigate(['/']);

  }

}
