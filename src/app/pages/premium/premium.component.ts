import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PremiumUpdateBalanceReq } from 'src/app/dto/balance/premium-update-balance-req';
import { PaymentInsertReq } from 'src/app/dto/payment/payment-insert-req';
import { PremiumPaymentHistoryInsertReq } from 'src/app/dto/premium-payment-history/premium-payment-history-insert-req';
import { PremiumTypeFindAllRes } from 'src/app/dto/premium-type/premium-type-find-all-res';
import { BalanceService } from 'src/app/service/balance.service';
import { FileService } from 'src/app/service/file.service';
import { PaymentService } from 'src/app/service/payment.service';
import { PremiumPaymentHistoryService } from 'src/app/service/premium-payment-history.service';
import { PremiumTypeService } from 'src/app/service/premium-type.service';

@Component({
  selector: 'app-premium',
  templateUrl: 'premium.component.html',
  styleUrls: ['./premium.styles.css'],
})
export class PremiumComponent implements OnInit {
  eventPaymentSubscription?: Subscription;
  displayMaximizable!: boolean;
  updateBalanceSystem: PremiumUpdateBalanceReq = {} as PremiumUpdateBalanceReq;
  insertPayment: PremiumPaymentHistoryInsertReq =
    {} as PremiumPaymentHistoryInsertReq;
  dataPremium: PremiumTypeFindAllRes = {} as PremiumTypeFindAllRes;
  choosePremium: number = 0;
  dropPremium: string[] = [];
  constructor(
    private premiumService: PremiumTypeService,
    private premiumTypeService: PremiumTypeService,
    private paymentService: PaymentService,
    private router: Router,
    private fileService: FileService,
    private premiumHistoryService: PremiumPaymentHistoryService,
    private balanceService: BalanceService
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

  onchoosesubmit(): void {
    this.premiumTypeService
      .findById(this.insertPayment.premiumTypeId!)
      .subscribe((result) => {
        console.log('masuk gak', result.data?.price);

        this.choosePremium = result.data?.price!;
      });
  }
  onsubmit(): void {
    this.premiumTypeService
      .findById(this.insertPayment.premiumTypeId!)
      .subscribe((result) => {
        this.updateBalanceSystem.balance = result.data?.price;
        this.balanceService
          .updatePremiumSystem(this.updateBalanceSystem)
          .subscribe((result) => {});
      });

    this.eventPaymentSubscription = this.premiumHistoryService
      .addPremiumPaymentHistory(this.insertPayment)
      .subscribe((result) => {
        this.router.navigateByUrl('/premiums');
      });
    this.displayMaximizable = false;
  }
}
