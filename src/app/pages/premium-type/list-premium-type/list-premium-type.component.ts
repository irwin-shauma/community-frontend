import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { PremiumTypeData } from 'src/app/dto/premium-type/premium-type-data';
import { PremiumTypeFindAllRes } from 'src/app/dto/premium-type/premium-type-find-all-res';
import { PremiumTypeFindById } from 'src/app/dto/premium-type/premium-type-find-by-id-res';
import { PremiumTypeService } from 'src/app/service/premium-type.service';

@Component({
  selector: 'app-list-premium-type',
  templateUrl: './list-premium-type.component.html'
})
export class ListPremiumTypeComponent implements OnInit {
  idDeleted!: string;
  premiumTypes: PremiumTypeFindAllRes = {} as PremiumTypeFindAllRes;
  premiumTypeData!: PremiumTypeData[];
  deleteSubscription?: Subscription;

  constructor(
    private confirmationService: ConfirmationService,
    private premiumTypeService: PremiumTypeService,
    private router: Router) { }

  ngOnInit(): void {
    this.premiumTypes.data= [];
    this.initData();

  }

  initData(): void{
    this.premiumTypeService.showAllPremiumType().subscribe((result) => {
      this.premiumTypes = result;
      this.premiumTypeData = result.data!;
    });
  }

  ondelete(id: string): void{
    this.idDeleted = id;
  }

  delete(): void{
    this.deleteSubscription = this.premiumTypeService
    .deletePremiumType(this.idDeleted)
    .subscribe((result) => {
      this.initData();
    });
  }

  confirm(id: string): void{
    this.idDeleted = id;
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.delete();
      },
    });
  }

  onUpdateById(id: number): void{
    this.router.navigateByUrl(`/premium-types/${id}`)
  }

}
