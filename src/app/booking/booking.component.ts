import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  from: string = '';
  to: string = '';
  readonly: boolean = true;
  isAdmin = window.localStorage.getItem('isAdmin')
  

  drivers = [
    {
      id: 1,
      driverName: 'Rohit Sharma',
      vehicleNumber: 'DL128C',
      vehicleModel: 'M-MODEL',
      arrivalTime: '10:00 AM',
      duration: '42 mins',
      driverRating: 4.5,
      fare: 315,
      pic: 'https://st2.depositphotos.com/1372276/5324/i/600/depositphotos_53246545-stock-photo-portrait-taxi-driver-smile-car.jpg',
    },
    {
      id: 2,
      driverName: 'Ana James',
      vehicleNumber: 'UK528C',
      vehicleModel: 'M-MODEL',
      arrivalTime: '10:00 AM',
      duration: '37 mins',
      driverRating: 3.4,
      fare: 408,
      pic: 'https://www.keeptaxisalive.org/wp-content/uploads/2019/05/download-2.jpg',
    },
  ];
  viewDiver: any;
  closeResult = '';
  constructor(
    private modalService: NgbModal,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    if(this.isAdmin === 'true'){
      this.router.navigate(['/admin']);
    }
  }

  open(content: any, driverId: any) {
    this.viewDiver = this.drivers[driverId - 1];
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
    this.showSuccessToast('Booking Success !!','')
  }
}
