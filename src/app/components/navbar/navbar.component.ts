import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MenuItem } from 'primeng/api';
import { Role } from 'src/app/constant/role-constant';
import { LoginService } from 'src/app/service/login.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.styles.css'],
})
export class NavbarComponent implements OnInit {
  dataLogin?: string | null;

  tieredItems!: MenuItem[];
  profile!: MenuItem[];
  loginMenu!: MenuItem[];
  userName!: string;
  loginStatus: boolean = false;

  constructor(private router: Router,
    private loginService: LoginService,
    private userService: UserService,
    private spinner : NgxSpinnerService) { }

  logout(): void {
    localStorage.clear();
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);

    this.checkLoginStatus();
  }

  home(): void {
    this.router.navigateByUrl('/home');
  }

  updateById(id: string): void {
    this.router.navigateByUrl(`/profiles/view/${id}`);
  }

  getUsername() {
    this.userService.findById(this.loginService.getData()?.data?.id!).subscribe((result) => {
      this.userName = result.data?.fullName!
    })
  }

  ngOnInit(): void {
   this.checkLoginStatus();

  }

  checkLoginStatus() : void {
    if (this.loginService.getData() != null) {
      this.loginStatus = true
      console.log(this.loginStatus)
      this.getUsername()
      this.userService.findById(this.loginService.getData()?.data?.id!).subscribe((result) => {
        this.userName = result.data?.fullName!
        this.initData()
      })
    } else {
      this.loginStatus = false
      console.log(this.loginStatus)
      this.initData()

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
            routerLink: '/event-types',
          },
        ],
        visible: this.dataLogin === Role.SUPERADMIN,
      },

      {
        label: 'Home',
        icon: 'pi pi-fw pi-home text-red-500',
        routerLink: '/homes',
        visible: this.dataLogin === Role.MEMBER,
      },
      {
        label: 'Article',
        icon: 'pi pi-fw pi-book text-red-500',
        routerLink: '/article-members',
        visible: this.dataLogin == Role.MEMBER,
      },
      {
        label: 'Thread',
        icon: 'pi pi-fw pi-comments text-red-500',
        routerLink: '/threads-main',
        visible: this.dataLogin == Role.MEMBER,
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
          },
        ],
        icon: 'pi pi-fw pi-calendar text-red-500',
        visible: this.dataLogin == Role.MEMBER,
      },
      {
        label: 'Premium',
        icon: 'pi pi-fw pi-star-fill text-red-500',
        routerLink: '/premiums',
        visible: this.dataLogin == Role.MEMBER,
      },
    ];

    this.profile = [
      {
        label: this.userName,
        // label: this.loginService.getData()?.data?.email,
        items: [
          {
            label: 'View Profile',
            icon: 'pi pi-fw pi-pencil',
            routerLink: '/profiles/view',
            command: () => {
              this.updateById(this.loginService.getData()?.data?.id!);
            },
          },
          {
            label: 'Logout',
            icon: 'pi pi-fw pi-power-off',
            command: () => {
              this.logout();
            },
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

    ]
  }
}
