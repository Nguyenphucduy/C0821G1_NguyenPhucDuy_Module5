import { Component, OnInit } from '@angular/core';
import {Student} from '../student';

@Component({
  selector: 'app-teaplate-driven-from-test',
  templateUrl: './teaplate-driven-from-test.component.html',
  styleUrls: ['./teaplate-driven-from-test.component.css']
})
export class TeaplateDrivenFromTestComponent implements OnInit {
  student: Student;

  constructor() {
    this.student = new Student();
  }

  ngOnInit(): void {
  }

  getInfoStudentForm(form: any): void {
    console.log(form.value);
    console.log(this.student);

  }
}
