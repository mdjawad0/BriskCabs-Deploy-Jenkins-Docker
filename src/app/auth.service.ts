import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) {}

  registerUser(user: any) {
    return this.http.post<any>(`${environment.apiURL}/user/`, user);
  }

  getDrivers(data: any) {
    return this.http.get(`${environment.apiURL}/nearbyDrivers`, data);
  }
}
