import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { Subscription } from 'rxjs';
import { RoleData } from 'src/app/dto/Role/role-data';
import { RoleFindAllRes } from 'src/app/dto/Role/role-find-all';
import { RoleService } from 'src/app/service/role.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role.component.html',
})
export class RoleListComponent implements OnInit {
  idDeleted!: string;
  roles: RoleFindAllRes = {} as RoleFindAllRes;
  roleData!: RoleData[];
  deleteSubsciption?: Subscription;
  loading: boolean = true;

  constructor(
    private confirmationService: ConfirmationService,
    private roleService: RoleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.roles.data = [];
    this.loadRoles
  }

  initData(): void {
    this.roleService.showAllRole().subscribe((result) => {
      this.roles = result;
      this.roleData = result.data!;
      this.loading = false;
    });
  }

  loadRoles(event: LazyLoadEvent) {

    this.initData();
}

  ondelete(id: string): void {
    this.idDeleted = id;
  }

  delete(): void {
    this.deleteSubsciption = this.roleService
      .deleteRole(this.idDeleted)
      .subscribe((result) => {
        this.initData();
      });
  }

  confirm(id: string): void {
    this.idDeleted = id;
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.delete();
      },
    });
  }

  onUpdateById(id: string): void {
    this.router.navigateByUrl(`/roles/${id}`);
  }
}
