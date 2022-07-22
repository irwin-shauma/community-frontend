import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.styles.css'],
})
export class NavbarComponent implements OnInit {
  dataLogin?: string | null;

  tieredItems!: MenuItem[];


  constructor(private router: Router) {}

  logout(): void {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  home(): void {
    this.router.navigateByUrl('/home');
  }

  ngOnInit(): void {
    this.tieredItems = [
      {
        label: 'Master',
        icon: 'pi pi-fw pi-list',
        items: [
          {
            label: 'Article',
            icon: 'pi pi-fw pi-calendar-plus',
            routerLink: '/article/list',
          },
          {
            label: 'Approval Payment',
            icon: 'pi pi-fw pi-check-circle',
            routerLink: '/payment',
          },
          {
            label: 'Role',
            icon: 'pi pi-fw pi-user',
            routerLink: '/roles',
          },
        ],
      },
      {
        label: 'Profile',
        icon: 'pi pi-fw pi-list',
        items: [
          {
            label: 'View Profile',
            icon: 'pi pi-fw pi-calendar-plus',
          },
          {
            label: 'Logout',
            icon: 'pi pi-fw pi-sign-out',
            routerLink: '/login',
          },
        ],
      },
    ];
  }
}
