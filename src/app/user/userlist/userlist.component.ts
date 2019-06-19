import { Router } from '@angular/router';
import { UserService } from './../../service/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  users: any [] = [];
  config: any;
  searchText = '';

  constructor(private userService: UserService, private router: Router) {
    this.config = {
          itemsPerPage: 3,
          currentPage: 1,
          totalItems: this.users.length
        };
   }

  getUsers(page: number = 1) {
    this.userService.getUsers(page).subscribe(
      (users: any) => {
      this.users = users.data;
      this.config.itemsPerPage = users.per_page;
      this.config.currentPage = users.page;
      this.config.totalItems = users.total;
    },
    (err) => {
      console.log('uuuuuuuuu', err);
    }
    );
  }
  pageChanged(event) {
    this.config.currentPage = event;
    this.getUsers(this.config.currentPage);
  }

  gotoEdit(event, user) {
    console.log('user: ', user);
    const url = `users/edit/${user.id}`;
    this.router.navigateByUrl(url).then(e => {

    }, err => {
      console.log('err: ', err);
    } );
  }
  ngOnInit() {
    this.getUsers();
  }

}
