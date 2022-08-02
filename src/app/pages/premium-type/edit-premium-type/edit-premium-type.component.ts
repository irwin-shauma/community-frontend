import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PremiumTypeData } from 'src/app/dto/premium-type/premium-type-data';
import { PremiumTypeService } from 'src/app/service/premium-type.service';

@Component({
  selector: 'app-edit-premium-type',
  templateUrl: './edit-premium-type.component.html',
  styleUrls: ['./edit-premium-type.component.css']
})
export class EditPremiumTypeComponent implements OnDestroy, OnInit {
  idParam!: string
  premiumTypeSubscription?: Subscription;
  data: PremiumTypeData= {} as PremiumTypeData;

  constructor(
    private premiumTypeService: PremiumTypeService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((result) => {
      const resultTemp: any = result;
      this.idParam = resultTemp.id;

      this.premiumTypeService.findById(this.idParam).subscribe((res) =>{
        this.data.id= res.data?.id;
        this.data.price = res.data?.price;
        this.data.duration = res.data?.duration;
        this.data.isActive = res.data?.isActive;
      });
    });
  }

  ngOnDestroy(): void {
    this.premiumTypeSubscription?.unsubscribe();
  }

  onSubmit(): void{
    this.premiumTypeService.editPremiumType(this.data).subscribe((result) => {
      this.router.navigateByUrl('/premium-types');
    });
  }

}
