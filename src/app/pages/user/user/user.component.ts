import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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


  constructor(
    private userService: UserService,
    private router: Router){}

    ngOnInit(): void{
      this.users.data = [];
      this.initData();
    }

    initData(): void{
      this.userService.showAllUser().subscribe((result) => {
        this.users = result;
        this.userData = result.data!;
      });
    }
}
