import { UserService } from './../../service/user/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usercdetails',
  templateUrl: './usercdetails.component.html',
  styleUrls: ['./usercdetails.component.scss']
})
export class UsercdetailsComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private userService: UserService) {
  }
  user: any;

  getUser() {
    this.activeRoute.params.subscribe(params => {
      if (params.id) {
        this.userService.getUser(params.id).subscribe(
          (user: any) => {
            this.user = user.data;
        }, (err) => {console.log(err); });
      }
    });

  }

  ngOnInit() {
    this.getUser();
  }


}
