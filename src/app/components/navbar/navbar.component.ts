import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  userName! : string;

  constructor(private router: Router,
     private loginService: LoginService,
     private userService : UserService) {}

  logout(): void {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  home(): void {
    this.router.navigateByUrl('/home');
  }

  updateById(id: string): void {
    this.router.navigateByUrl(`/profiles/view/${id}`);
  }

  getUsername() {
    this.userService.findById( this.loginService.getData()?.data?.id!).subscribe((result) => {
      this.userName = result.data?.fullName!
    })

  }

  ngOnInit(): void {
    this.getUsername()
    // console.log(this.userName + "--> Here")
    this.userService.findById( this.loginService.getData()?.data?.id!).subscribe((result) => {
      console.log(result.data?.fullName)
      this.userName = result.data?.fullName!
      this.initData()
    })

    // this.initData()
  }

  initData() : void {
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
        icon: 'pi pi-fw pi-calendar text-red-500',
        routerLink: '/event-members',
        visible: this.dataLogin == Role.MEMBER,
      },
      {
        label: 'Premium',
        icon: 'pi pi-fw pi-star-fill text-red-500',
        routerLink: '/premiums',
        visible: this.dataLogin == Role.MEMBER,
      },
    ];
    
    console.log(this.userName  + "Hereee")
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
  }
}
