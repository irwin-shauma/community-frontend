import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { Subscription } from 'rxjs';
import { ThreadTypeData } from 'src/app/dto/threadtype/thread-type-data';
import { ThreadTypeFindAll } from 'src/app/dto/threadtype/thread-type-find-all';
import { ThreadTypeService } from 'src/app/service/thread-type.service';

@Component({
  selector: 'app-list-threadtype',
  templateUrl: './list-threadtype.component.html',
})
export class ListThreadTypeComponent implements OnInit, OnDestroy {

  threadTypeSub?: Subscription;
  threadType: ThreadTypeFindAll = {} as ThreadTypeFindAll;
  threadTypeData!: ThreadTypeData[];
  loading: boolean = true;
  idDelete!: string
  deleteSubsciption?: Subscription;

  constructor(private confirmationService: ConfirmationService, 
    private threadTypeService: ThreadTypeService,
    private router: Router) { }

  ngOnInit(): void {
    this.initData();
  }

  
  initData(): void {
    this.threadTypeSub = this.threadTypeService.showAllThreadType().subscribe(result => {
      this.threadType = result
      this.threadTypeData = result.data!;
      this.loading = false;
    })
  }

  loadThreadType(event: LazyLoadEvent) {
    this.initData();
  }

  update(id: string): void {
    this.router.navigateByUrl(`threadtypes/${id}`);
  }

  delete(): void {
    this.deleteSubsciption = this.threadTypeService.delete(this.idDelete)
        .subscribe(result => {
          this.loading = false;
          this.initData();
        })
  }

  ngOnDestroy(): void {
    this.threadTypeSub?.unsubscribe();
    this.deleteSubsciption?.unsubscribe();
  }

  confirm(id: string) {
    this.idDelete = id;
    this.loading = true;
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => { 
        this.delete()
      },
    });
  }
}
