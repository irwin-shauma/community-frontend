import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UpdatePhotoProfileReq } from 'src/app/dto/user/update-photo-profile-req';
import { UserChangePasswordReq } from 'src/app/dto/user/user-change-password-req';
import { UserUpdateReq } from 'src/app/dto/user/user-update-req';
import { FileService } from 'src/app/service/file.service';
import { LoginService } from 'src/app/service/login.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['./../profile.styles.css'],
})
export class ProfileComponent implements OnDestroy, OnInit {
  idParam!: string;
  id!: string | any;
  userSubscription?: Subscription;
  data: UserUpdateReq = {} as UserUpdateReq;
  editProfile: UpdatePhotoProfileReq = {} as UpdatePhotoProfileReq;
  login: LoginService = {} as LoginService;

  userChangePasswordReq : UserChangePasswordReq = {} as UserChangePasswordReq;
  confirmedNewPassword? : string;
  isValidNewPassword? : boolean;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private fileService: FileService, 
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
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

  getById(): void {
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

  onSubmit(): void {
    this.userService.editUser(this.data).subscribe((result) => {
      this.router.navigateByUrl(`/profiles`);
    });
  }

  onChangeFile(event: any): void {
    const file = event.files[0];
    this.fileService.uploadAsBase64(file).then((res) => {
      this.data.fileName = res[0];
      this.data.fileExtension = res[1];
    });
  }

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe();
  }

  validatePassword() : void{
    if(this.userChangePasswordReq.newPassword != this.confirmedNewPassword){
      this.isValidNewPassword = true
    } else {
      this.isValidNewPassword = false
    }
  }

  changePasswordSubmit() : void{
    this.userService.changePassword(this.userChangePasswordReq).subscribe((result) => {
      this.router.navigateByUrl('/profiles')
    })
  }

}
