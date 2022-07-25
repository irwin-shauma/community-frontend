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
  profile!: MenuItem[];

  constructor(private router: Router) { }

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
          {

            label: 'Thread Type',
            icon: 'pi pi-fw pi-sort',
            routerLink: '/threadtypes',
          },
          {
            label: 'Premium Types',
            icon: 'pi pi-fw pi-bolt',
            routerLink: '/premium-types',
          },
          {
            label: 'Event Types',
            icon: 'pi pi-fw pi-bolt',
            routerLink: '/event-types'
          },
        ],
      },
      {
        label : 'Premium',
        routerLink: '/premiums'
      }
    ];
    this.profile = [
      {
        label: 'salman | admin',
        items: [
          {
            label: 'View Profile',
            icon: 'pi pi-fw pi-pencil',
            routerLink: '/profiles',
          },
          {
            label: 'Logout',
            icon: 'pi pi-fw pi-power-off',
            routerLink: '/login',
          },
        ],
      },
    ];
  }
}
