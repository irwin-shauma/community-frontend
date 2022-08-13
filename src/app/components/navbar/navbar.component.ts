import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { Role } from 'src/app/constant/role-constant';
import { LogoutReq } from 'src/app/dto/user/logout-req';
import { LoginService } from 'src/app/service/login.service';
import { LogoutService } from 'src/app/service/logout.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.styles.css'],
})
export class NavbarComponent implements OnInit {
  dataLogin?: string | null;
  subcription?: Subscription;
  tieredItems!: MenuItem[];
  profile!: MenuItem[];
  loginMenu!: MenuItem[];
  userName!: string;
  fileId!: string;
  loginStatus: boolean = false;

  logoutReq: LogoutReq = {} as LogoutReq;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private logoutService: LogoutService,
    private userService: UserService,
    private activateRoute: ActivatedRoute
  ) { }

  logout(): void {
    localStorage.clear();
    this.userService.logout(this.logoutReq);
    this.checkLoginStatus();
  }

  home(): void {
    this.router.navigateByUrl('/home');
  }

  updateById(): void {
    this.router.navigateByUrl(`/profiles/view`);
  }

  getUsername() {
    this.userService
      .findById(this.loginService.getData()?.data?.id!)
      .subscribe((result) => {
        this.userName = result.data?.fullName!;
        this.fileId = result.data?.fileId!;
      });
  }

  ngOnInit(): void {
    this.checkLoginStatus();
    this.logoutReq.id = String(this.loginService.getData()?.data?.id);
  }

  checkLoginStatus(): void {
    if (this.loginService.getData() != null) {
      console.log(this.loginService.getData());

      this.loginStatus = true;
      this.getUsername();
      this.userService
        .findById(this.loginService.getData()?.data?.id!)
        .subscribe((result) => {
          this.userName = result.data?.fullName!;
          this.initData();
        });
    } else {
      this.loginStatus = false;
      // this.initData()
    }
  }

  initData(): void {
    this.dataLogin = this.loginService.getRole();
    this.tieredItems = [
      {
        label: 'Master',
        icon: 'pi pi-fw pi-list',
        items: [
          {
            label: 'Article',
            icon: 'pi pi-fw pi-calendar-plus',
            routerLink: '/article',
          },
          {
            label: 'Role',
            icon: 'pi pi-fw pi-user',
            routerLink: '/roles',
          },
        ],
        visible: this.dataLogin === Role.SUPERADMIN,
      },
      {
        label: 'Type',
        icon: 'pi pi-fw pi-book',
        items: [
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
            routerLink: '/event-types',
          },
        ],
        visible: this.dataLogin === Role.SUPERADMIN,
      },
      {
        label: 'Approval Payment',
        icon: 'pi pi-fw pi-check-circle',
        visible: this.dataLogin === Role.SUPERADMIN,
        items: [
          {
            label: 'Premium',
            icon: 'pi pi-money-bill',
            items: [
              {
                label: 'All Premium',
                icon: 'pi pi-money-bill',
                routerLink: '/payment',
              },
              {
                label: 'Not Approved Premium',
                icon: 'pi pi-money-bill',
                routerLink: '/payment/unapprove-premiums',
              }
            ]
          },
          {
            label: 'Event',
            icon: 'pi pi-money-bill',
            items: [
              {
                label: 'All Event',
                icon: 'pi pi-money-bill',
                routerLink: '/payment/events'
              },
              {
                label: 'Not Approved Event',
                icon: 'pi pi-money-bill',
                routerLink: '/payment/unapprove-events'
              }
            ]
          }
        ]
      },
      {
        label: 'List',
        icon: 'pi pi-fw pi-table',
        items: [
          {
            label: 'Event',
            icon: 'pi pi-fw pi-calendar',
            routerLink: '/events',
          },
          {
            label: 'Thread',
            icon: 'pi pi-fw pi-book',
            routerLink: '/threads',
          },
        ],
        visible: this.dataLogin === Role.SUPERADMIN,
      },
      {
        label: 'Article',
        icon: 'pi pi-fw pi-book text-red-500',
        routerLink: '/article-members',
        visible: this.dataLogin !== Role.SUPERADMIN,
      },
      {
        label: 'Thread',
        icon: 'pi pi-fw pi-comments text-red-500',
        routerLink: '/threads-main',
        visible: this.dataLogin !== Role.SUPERADMIN,
      },
      {
        label: 'Event',
        items: [
          {
            label: 'Create Event',
            icon: 'pi pi-fw pi-plus text-red-500',
            routerLink: '/event-members/create',
          },
          {
            label: 'See All Event',
            icon: 'pi pi-fw pi-book text-red-500',
            routerLink: '/event-members',
          },
        ],
        icon: 'pi pi-fw pi-calendar text-red-500',
        visible: this.dataLogin != Role.SUPERADMIN,
      },
      {
        label: 'Premium',
        icon: 'pi pi-fw pi-star-fill text-red-500',
        routerLink: '/premiums',
        visible: this.dataLogin != Role.SUPERADMIN,
      },
    ];

    this.profile = [
      {
        label:
          this.userName + ' | ' + this.loginService.getRole()?.toLowerCase(),
        items: [
          {
            label: 'View Profile',
            icon: 'pi pi-fw pi-pencil',
            routerLink: '/profiles',
          },
          {
            label: 'Logout',
            icon: 'pi pi-fw pi-power-off',
            // command: () => {
            //   // this.logout();
            // },
            routerLink: '/logout',
          },
        ],
      },
    ];

    this.loginMenu = [
      {
        label: 'Login',
        icon: 'pi pi-fw pi-home text-red-500',
        routerLink: '/login',
      },
    ];
  }
}
