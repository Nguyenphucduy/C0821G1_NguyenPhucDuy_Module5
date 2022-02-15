import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;
  user: User;

  constructor() {
    this.userForm = new FormGroup({
      email: new FormControl('', Validators.email),
      country: new FormControl(),
      age: new FormControl('', this.checkAge18),
      phone: new FormControl('', Validators.pattern('^\\+84\\d{9,10}$')),
      // And I was using it like this:
      //
      //   Validators.pattern("^\d{1,4}$") // wrong
      // The problem is that the backslash \ has to be escaped, so the correct form is:
      //
      //   Validators.pattern("^\\d{1,4}$") // correct
      gender: new FormControl(),
      pwGroup: new FormGroup({
        password: new FormControl('', Validators.minLength(6)),
        passwordConfirm: new FormControl('', Validators.minLength(6))
      }, this.checkPassword)
    });
  }

  ngOnInit(): void {
  }

  getInfoUser() {
    console.log(this.userForm);
    this.user = Object.assign({}, this.userForm.value);
    console.log(this.user);
  }
  checkAge18(abstractControl: AbstractControl): any {
    const yearStudent = Number(abstractControl.value.substr(0, 4));
    const currentYear = new Date().getFullYear();
    console.log(currentYear - yearStudent  + ' age (debug)');
    return currentYear - yearStudent >= 18 ? null : {not18: true};
  }
  checkPassword(abstractControl: AbstractControl): any {
    console.log(abstractControl.value);
    console.log(abstractControl.value.password);
    console.log(abstractControl.value.passwordConfirm);
    return abstractControl.value.password === abstractControl.value.passwordConfirm ? null : {wrongPassword: true};
  }
}
