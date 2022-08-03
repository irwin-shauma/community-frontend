import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RoleInsertReq } from 'src/app/dto/Role/role-Iinsert-req';
import { RoleService } from 'src/app/service/role.service';

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
})
export class RoleCreateComponent implements OnDestroy {
  roleSubscription?: Subscription;
  insertRoleReq: RoleInsertReq = {} as RoleInsertReq;
  loading: boolean = false;

  constructor(private roleService: RoleService, private router: Router) {}

  onsubmitrole(): void {
    this.loading = true;
    setTimeout(() => {
      this.roleSubscription = this.roleService
      .addRole(this.insertRoleReq)
      .subscribe((result) => {
        this.router.navigateByUrl('/roles');
      });
      this.loading = false;
    }, 2000);
  }

  ngOnDestroy(): void {
    this.roleSubscription?.unsubscribe();
  }
}
