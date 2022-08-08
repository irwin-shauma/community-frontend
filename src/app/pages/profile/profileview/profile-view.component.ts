import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserData } from 'src/app/dto/user/user-data';
import { UserFindByIdRes } from 'src/app/dto/user/user-find-by-id-res';
import { LoginService } from 'src/app/service/login.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./../profile.styles.css'],
})
export class ProfileViewComponent implements OnInit {
  idParam!: string;
  id!: string | any;
  data: UserData = {} as UserData;

  userSubscription?: Subscription;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.viewProfile();
  }

  // view using loginService
  viewProfile(): void {
    this.id = this.loginService.getData()!.data!.id;

    this.userService.findById(this.id).subscribe((res) => {
      this.data.id = res.data?.id;
      this.data.fullName = res.data?.fullName;
      this.data.company = res.data?.company;
      this.data.industry = res.data?.industry;
      this.data.position = res.data?.position;
      this.data.fileId = res.data?.fileId;
    });
  }

  // path params
  findById(): void {
    this.activateRoute.params.subscribe((result) => {
      const resultTemp: any = result;
      this.idParam = resultTemp.id;

      this.userService.findById(this.idParam).subscribe((res) => {
        this.data.id = res.data?.id;
        this.data.fullName = res.data?.fullName;
        this.data.company = res.data?.company;
        this.data.industry = res.data?.industry;
        this.data.position = res.data?.position;
        this.data.fileId = res.data?.fileId;
      });
    });
  }

  updateById(): void {
    this.router.navigateByUrl(`/profiles/edit`);
  }
}
