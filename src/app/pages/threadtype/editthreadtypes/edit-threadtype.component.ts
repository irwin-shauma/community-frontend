import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ThreadTypeUpdateReq } from 'src/app/dto/thread-type/thread-type-update-req';
import { ThreadTypeService } from 'src/app/service/thread-type.service';

@Component({
  selector: 'app-edit-threadtype',
  templateUrl: './edit-threadtype.component.html',
})
export class EditThreadTypeComponent implements OnInit, OnDestroy {
  idParam!: string;
  threadTypeSub?: Subscription;
  data: ThreadTypeUpdateReq = {} as ThreadTypeUpdateReq
  loading!: boolean

  constructor(
    private threadTypeService: ThreadTypeService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe(result => {
      const resultTemp: any = result;
      this.idParam = resultTemp.id;

      this.threadTypeService.getByid(this.idParam).subscribe(res => {
        this.data.id = res.data.id;
        this.data.threadType = res.data.threadType;
        this.data.isActive = res.data.isActive;
      })
    })
  }

  onSubmit(): void {
    this.loading = true;
    this.threadTypeSub = this.threadTypeService.update(this.data).subscribe(result => {
      this.loading = false;
      this.router.navigateByUrl('/threadtypes');
    })
  }

  ngOnDestroy(): void {
    this.threadTypeSub?.unsubscribe();
  }

}
