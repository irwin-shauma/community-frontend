import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PremiumTypeInsertReq } from 'src/app/dto/premium-type/premium-type-insert-req';
import { PremiumTypeService } from 'src/app/service/premium-type.service';

@Component({
  selector: 'app-create-premium-type',
  templateUrl: './create-premium-type.component.html',
  styleUrls: ['./create-premium-type.component.css']
})
export class CreatePremiumTypeComponent implements OnDestroy {
  premiumTypeSubscription?: Subscription;
  insertPremiumTypeReq: PremiumTypeInsertReq = {} as PremiumTypeInsertReq;
  loading: boolean = false;

  constructor(
    private premiumTypeService: PremiumTypeService,
    private router: Router
  ) { }

  onSubmitPremiumType(): void {
    this.loading = true;
    setTimeout(() => {
      this.premiumTypeSubscription = this.premiumTypeService
        .addPremiumType(this.insertPremiumTypeReq)
        .subscribe((result) => {
          this.router.navigateByUrl('/premium-types');
        });
      this.loading = false;
    }, 2000);
  }

  ngOnDestroy(): void {
    this.premiumTypeSubscription?.unsubscribe();
  }


}
