import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ThreadType } from 'src/app/constant/thread-type';
import { ThreadTypeInsertReq } from 'src/app/dto/threadtype/thread-type-insert-req';
import { ThreadTypeService } from 'src/app/service/thread-type.service';

@Component({
  selector: 'app-threadtype-create',
  templateUrl: './create-threadtype.component.html',
})
export class CreateThreadTypeComponent implements OnDestroy {

  threadTypeSubs?: Subscription;
  loading!: boolean;
  threadType: ThreadTypeInsertReq = {} as ThreadTypeInsertReq;

  constructor(private threadTypeServce: ThreadTypeService, private router: Router){}

  onSubmit(): void {
    this.loading = true;
    this.threadTypeSubs = this.threadTypeServce.insert(this.threadType).subscribe(result =>{
      this.loading = false;
      this.router.navigateByUrl('/threadtypes')
    })
  }

  ngOnDestroy(): void {
    this.threadTypeSubs?.unsubscribe();
  }
}
