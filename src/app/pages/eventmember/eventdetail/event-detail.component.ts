import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventHeaderFindById } from 'src/app/dto/event-header/event-header-find-by-id-res';
import { PaymentInsertReq } from 'src/app/dto/payment/payment-insert-req';
import { EventHeaderService } from 'src/app/service/event-header.service';
import { FileService } from 'src/app/service/file.service';
import { LoginService } from 'src/app/service/login.service';
import { PaymentService } from 'src/app/service/payment.service';

@Component({
  selector: 'app-eventdetail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./../eventmember.styles.css'],
})
export class EventDetailCompoenent implements OnInit {
  idParam!: string;
  eventDetailSubscription?: Subscription;
  eventPaymentSubscription?: Subscription;
  showEdit: boolean = false;
  eventData: EventHeaderFindById = {} as EventHeaderFindById;
  insertPayment: PaymentInsertReq = {} as PaymentInsertReq;
  displayMaximizable!: boolean;
  constructor(
    private activateRoute: ActivatedRoute,
    private eventService: EventHeaderService,
    private fileService: FileService,
    private paymentService: PaymentService,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.initData();
  }

  initData(): void {
    this.activateRoute.params.subscribe((result) => {
      const resultTemp: any = result;
      this.idParam = resultTemp.id;

      this.eventService.findById(this.idParam).subscribe((res) => {
        if (this.loginService.getData()?.data?.id === res.data?.userId) {
          this.showEdit = true;
        }
        this.eventData.data = res.data;
      });
    });
  }

  onsubmit(): void {
    this.eventPaymentSubscription = this.paymentService
      .addPayment(this.insertPayment)
      .subscribe((result) => {
        this.router.navigateByUrl('/event-members');
      });
  }

  onInsertFile(event: any): void {
    const file = event.files[0];
    this.fileService.uploadAsBase64(file).then((res) => {
      this.insertPayment.fileName = res[0];
      this.insertPayment.fileExtension = res[1];
    });
  }

  showMaximizableDialog() {
    this.displayMaximizable = true;
  }

  updateThread(id: string): void {
    this.router.navigateByUrl(`/event-members/edit/${id}`);
  }
}
