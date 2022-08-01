import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PrimeIcons } from 'primeng/api';
import { Observable } from 'rxjs';
import { getAll } from 'src/app/state/register/register.selector';

@Component({
  selector: 'app-main-register',
  templateUrl: './register-main.component.html',
  styleUrls: ['./auth.style.css'],
})
export class RegisterMainComponent implements OnInit {
  event!: any[];
  mainRegister = true;
  createAccount = true;
  data$!: Observable<string[]>;

  constructor(private store: Store) {}

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

  nextRegister(): void {
    this.mainRegister = false;
  }

  nextCreateAccount(): void {
    this.createAccount = false;
  }
}
