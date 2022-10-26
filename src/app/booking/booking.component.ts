import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})

export class BookingComponent implements OnInit {
  from: string = '';
  to: string = '';
  readonly: boolean = true;
  validateFromTo = false;
  validateNoDrivers = false;
  drivers = [
    {
      id: 0,
      driverName: '',
      vehicleNumber: '',
      vehicleModel: '',
      arrivalTime: '',
      duration: '',
      driverRating: 0,
      fare: 0,
      pic: ''
    }
  ];
  viewDiver: any;
  closeResult = '';

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private toastr: ToastrService,
    private authSerivce: AuthService
  ) { }

  ngOnInit(): void {
  }

  getData() {
    this.validateNoDrivers = false;
    this.validateFromTo = false;
    if (this.from !== "" && this.to !== "") {
      if (this.from === this.to) {
        this.validateFromTo = true;
        return;
      }
      else {
        this.validateFromTo = false;
        const data = {
          from: this.from,
          to: this.to
        }
        this.authSerivce.getDrivers(data,this.from,this.to).subscribe((res: any) => {
          if (res.length > 0)
          {
            this.drivers = res;
            this.validateNoDrivers = false;
          }
          else
          {
            this.validateNoDrivers = true;
            this.drivers = [];

          }
        console.log("service res"+this.drivers);
        }, (error) => {
          this.validateNoDrivers = true;
          this.drivers = [];
          console.log(error);
        })
      }

    }
  }

  open(content: any,driverDetails: any, driverId: any) {
  console.log(driverDetails);
  console.log("dr id"+driverId);

    this.viewDiver = driverDetails;
    console.log(this.viewDiver);
    let rideDetails = {
      id: this.viewDiver.id,
      from: this.from,
      to: this.to,
      driverName: this.viewDiver.driverName,
      vehicleNumber: this.viewDiver.vehicleNumber,
      vehicleModel: this.viewDiver.vehicleModel,
      arrivalTime: this.viewDiver.arrivalTime,
      duration: this.viewDiver.duration,
      driverRating: this.viewDiver.driverRating,
      fare: this.viewDiver.fare,
    };
    sessionStorage.setItem("rideDetails", JSON.stringify(rideDetails));
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

storeBookingDetails(driverDetails: any){
  console.log(driverDetails);
    this.authSerivce.recordBooking(driverDetails).subscribe((res: any) => {
      console.log("Ride Details saved successfully")
      },
      (err) => {
        console.log("Something went wrong")
      }
    );
}


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  showSuccessToast(title: any, body: any) {
    this.toastr.success(title, body);
  }

  redirectToRide() {
    this.router.navigate(['/ride']);
    this.showSuccessToast('Booking Success !!', '')
  }
}
