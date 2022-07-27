import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { RoleData } from 'src/app/dto/Role/role-data';
import { RoleFindAllRes } from 'src/app/dto/Role/role-find-all';
import { RoleService } from 'src/app/service/role.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role.component.html',
})
export class RoleListComponent implements OnInit {
  idDeleted!: number;
  roles: RoleFindAllRes = {} as RoleFindAllRes;
  roleData!: RoleData[];
  deleteSubsciption?: Subscription;

  constructor(
    private confirmationService: ConfirmationService,
    private roleService: RoleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.roles.data = [];
    this.initData();
  }

  initData(): void {
    this.roleService.showAllRole().subscribe((result) => {
      this.roles = result;
      this.roleData = result.data!;
    });
  }

  ondelete(id: number): void {
    this.idDeleted = id;
  }

  delete(): void {
    this.deleteSubsciption = this.roleService
      .deleteRole(this.idDeleted)
      .subscribe((result) => {
        this.initData();
      });
  }

  confirm(id: number): void {
    this.idDeleted = id;
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.delete();
      },
    });
  }

  onUpdateById(id: number): void {
    this.router.navigateByUrl(`/roles/${id}`);
  }
}
