import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Student} from '../student';

@Component({
  selector: 'app-reactive-from-test',
  templateUrl: './reactive-from-test.component.html',
  styleUrls: ['./reactive-from-test.component.css']
})
export class ReactiveFromTestComponent implements OnInit {
  studentForm: FormGroup;
  student: Student;

  constructor() {
    this.studentForm = new FormGroup({
      name: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', [Validators.required, this.checkAge18]),
      pwGroup: new FormGroup({
        password: new FormControl(),
        passwordConfirm: new FormControl()
      }, this.checkPassword)
    });
  }

  ngOnInit(): void {
  }

  getInfoStudent() {
    // console.log(this.studentForm);
    this.student = Object.assign({}, this.studentForm.value);
    console.log(this.student);
  }

  checkAge18(abstractControl: AbstractControl): any {
    const yearStudent = Number(abstractControl.value.substr(0, 4));
    const currentYear = new Date().getFullYear();
    console.log(currentYear - yearStudent  + ' age (debug)');
    return currentYear - yearStudent >= 18 ? null : {not18: true};

  }
  checkPassword(abstractControl: AbstractControl): any {
    console.log(abstractControl.value);
  }
}
