import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PrimeIcons } from 'primeng/api';
import { Observable, Subscription } from 'rxjs';
import { UserInsertReq } from 'src/app/dto/user/user-insert-req';
import { VerificationInsertData } from 'src/app/dto/verification/verification-insert-req';
import { UserService } from 'src/app/service/user.service';
import { VerificationService } from 'src/app/service/verification.service';
import { addAction } from 'src/app/state/register/register.action';
import { Register } from 'src/app/state/register/register.model';
import { getAll } from 'src/app/state/register/register.selector';
import { InsertDataRes } from '../../dto/insert-data-res';

@Component({
  selector: 'app-main-register',
  templateUrl: './register-main.component.html',
  styleUrls: ['./auth.style.css'],
})
export class RegisterMainComponent implements OnInit, OnDestroy {
  event!: any[];
  registerSwitch = 1;
  dataRegister: Register = {} as Register;
  insertRes: InsertDataRes = {} as InsertDataRes;
  verificationSubscription?: Subscription;
  userSubscription?: Subscription;
  verificationId: string = '';
  insertVerificationReq: VerificationInsertData = {} as VerificationInsertData;
  data$!: Observable<Register[]>;
  constructor(
    private store: Store,
    private verificationService: VerificationService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.event = [
      { status: 'Sign Up', icon: PrimeIcons.SIGN_IN, color: '#FD4848' },
      {
        status: 'Verification',
        icon: PrimeIcons.BOOK,
        color: '#FD4848',
      },
      {
        status: 'Detail',
        icon: PrimeIcons.CODE,
        color: '#FD4848',
      },
    ];
    this.data$ = this.store.select(getAll);
  }

  onSubmitRegis(): void {
    const insertVerification = {} as VerificationInsertData;
    insertVerification.email = this.dataRegister.email;
    this.verificationSubscription = this.verificationService
      .addVerification(insertVerification)
      .subscribe((result) => {
        this.verificationId = result.data.id;
        this.registerSwitch = 2;
      });
  }

  onSubmit(): void {
    this.registerSwitch = 3;
  }

  finalSubmit(): void {
    this.store.dispatch(addAction({ payload: this.dataRegister }));
    this.verificationService.findById(this.verificationId).subscribe((res) => {
      if (this.dataRegister.verification == res.data?.verification) {
        const insertUser = {} as UserInsertReq;
        insertUser.email = this.dataRegister.email;
        insertUser.password = this.dataRegister.password;
        insertUser.company = this.dataRegister.company;
        insertUser.fullName = this.dataRegister.fullName;
        insertUser.industry = this.dataRegister.industry;
        insertUser.position = this.dataRegister.position;
        this.userSubscription = this.userService
          .addUser(insertUser)
          .subscribe((result) => {
            this.router.navigateByUrl('/login');
          });
      }
    });
  }

  ngOnDestroy(): void {
    this.verificationSubscription?.unsubscribe();
  }
}
