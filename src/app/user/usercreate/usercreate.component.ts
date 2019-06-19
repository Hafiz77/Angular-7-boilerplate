import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-usercreate',
  templateUrl: './usercreate.component.html',
  styleUrls: ['./usercreate.component.scss']
})
export class UsercreateComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private userService: UserService, private fb: FormBuilder) {
    this.createForm();
  }
  user: any;
  createSuccess  = false;
  submitted = false;
  userForm: FormGroup;
  createForm() {
    this.userForm = this.fb.group({
        first_name: new FormControl ('', Validators.compose([Validators.required, Validators.maxLength(30), Validators.minLength(1)])),
        last_name: new FormControl ('', Validators.compose([Validators.required, Validators.maxLength(30), Validators.minLength(1)])),
        email: new FormControl ('', Validators.compose([Validators.required, Validators.email ])),
        avatar: new FormControl (''),
    });
  }

  get f() { return this.userForm.controls; }

  onSubmit() {
    this.createSuccess = false;
    this.submitted = true;
    this.userService.createUser(this.userForm.value).subscribe(user => {
      this.createSuccess = true;
      setTimeout(() => { this.createSuccess = false; }, 3000);
    }, err => {
      console.log('err: ', err);
    } );
  }
  ngOnInit() {
  }

}
