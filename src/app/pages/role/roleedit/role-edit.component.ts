import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RoleUpdateReq } from 'src/app/dto/Role/role-update-req';
import { RoleService } from 'src/app/service/role.service';

@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
})
export class RoleEditComponent implements OnDestroy, OnInit {
  idParam!: number;
  roleSubscrption?: Subscription;
  data: RoleUpdateReq = {} as RoleUpdateReq;

  constructor(
    private roleService: RoleService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((result) => {
      const resultTemp: any = result;
      this.idParam = resultTemp.id;

      this.roleService.findById(this.idParam).subscribe((res) => {
        this.data.id = res.data?.id;
        this.data.roleName = res.data?.roleName;
        this.data.roleCode = res.data?.roleCode;
        this.data.isActive = res.data?.isActive;
      });
    });
  }

  ngOnDestroy(): void {
    this.roleSubscrption?.unsubscribe();
  }

  onSubmit(): void {
    this.roleService.editRole(this.data).subscribe((result) => {
      this.router.navigateByUrl('/roles');
    });
  }
}
