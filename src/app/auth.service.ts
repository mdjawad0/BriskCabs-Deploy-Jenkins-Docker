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

  getDrivers(data: any,from: any,to: any) {
    return this.http.get(`${environment.apiURL}/nearbyDrivers?from=`+from+`&to=`+to, data);
  }

  recordBooking(bookingDetails: any){
   return this.http.post<any>(`${environment.apiURL}/booking/`, bookingDetails);
  }
}
