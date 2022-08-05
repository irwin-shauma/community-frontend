import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LazyLoadEvent } from 'primeng/api';
import { UserData } from 'src/app/dto/user/user-data';
import { UserFindAllRes } from 'src/app/dto/user/user-find-all-res';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit{

  users: UserFindAllRes = {} as UserFindAllRes;
  userData!: UserData[];
  loading!: boolean;


  constructor(
    private userService: UserService,
    private router: Router){}

    ngOnInit(): void{
      this.users.data = [];
      this.loadUsers
      // this.initData()
    }

    initData(): void{
      this.userService.showAllUser().subscribe((result) => {
        this.users = result;
        this.userData = result.data!;
      });
    }

    loadUsers(event: LazyLoadEvent){
      this.loading = true;

      setTimeout(() => {
        this.initData()
        this.loading = false;
      }, 2000)
    }
}
