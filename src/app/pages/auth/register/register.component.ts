import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-register-auth',
  templateUrl: './register.component.html',
  styleUrls: ['./../auth.style.css'],
})
export class RegisterComponent implements OnInit {
  event!: any[];

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
  }
}
