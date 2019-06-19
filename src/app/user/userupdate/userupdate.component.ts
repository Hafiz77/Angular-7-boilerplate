import { UserService } from './../../service/user/user.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.scss']
})
export class UserupdateComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private userService: UserService, private fb: FormBuilder) {
    this.createForm();
  }
  user: any;
  updateSuccess  = false;
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

  getUser() {
    this.activeRoute.params.subscribe(params => {
      if (params.id) {
        this.userService.getUser(params.id).subscribe(
          (user: any) => {
            this.user = user.data;
            this.userForm.patchValue({
              first_name: this.user.first_name,
              last_name: this.user.last_name,
              email: this.user.email,
              avatar: this.user.avatar
            });
        }, (err) => {console.log(err); });
      }
    });

  }

  get f() { return this.userForm.controls; }

  ngOnInit() {
    this.getUser();
  }

  onSubmit() {
    this.updateSuccess = false;
    this.submitted = true;
    this.userForm.patchValue({avatar: this.user.avatar});
    this.userService.updateUser(this.user.id, this.userForm.value ).subscribe(user => {
      this.updateSuccess = true;
      setTimeout(() => { this.updateSuccess = false; }, 3000);
    }, err => {
      console.log('err: ', err);
    } );
  }

}
