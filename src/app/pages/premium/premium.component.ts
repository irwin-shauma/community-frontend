import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PaymentInsertReq } from 'src/app/dto/payment/payment-insert-req';
import { PremiumTypeFindAllRes } from 'src/app/dto/premium-type/premium-type-find-all-res';
import { FileService } from 'src/app/service/file.service';
import { PaymentService } from 'src/app/service/payment.service';
import { PremiumTypeService } from 'src/app/service/premium-type.service';

@Component({
  selector: 'app-premium',
  templateUrl: 'premium.component.html',
  styleUrls: ['./premium.styles.css'],
})
export class PremiumComponent implements OnInit {
  eventPaymentSubscription?: Subscription;
  displayMaximizable!: boolean;
  insertPayment: PaymentInsertReq = {} as PaymentInsertReq;
  dataPremium: PremiumTypeFindAllRes = {} as PremiumTypeFindAllRes;
  choosePremium: [] = [];
  dropPremium: string[] = []
  constructor(
    private premiumService: PremiumTypeService,
    private paymentService: PaymentService,
    private router: Router,
    private fileService: FileService
  ) {}

  ngOnInit(): void {
    this.initData();
  }

  initData(): void {
    this.premiumService.showAllPremiumType().subscribe((result) => {
      this.dataPremium.data = result.data;
    });
  }
  showMaximizableDialog() {
    this.displayMaximizable = true;
  }

  onInsertFile(event: any): void {
    const file = event.files[0];
    this.fileService.uploadAsBase64(file).then((res) => {
      this.insertPayment.fileName = res[0];
      this.insertPayment.fileExtension = res[1];
    });
  }
  onsubmit(): void {
    this.eventPaymentSubscription = this.paymentService
      .addPayment(this.insertPayment)
      .subscribe((result) => {
        this.router.navigateByUrl('/premiums');
      });
    this.displayMaximizable = false;
  }
}
