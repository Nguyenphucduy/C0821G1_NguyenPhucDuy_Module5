import { Component, OnInit } from '@angular/core';
import {Student} from '../student';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public studentList = [];
  student: Student;
  studentDetail: Student;

  constructor() {
    this.studentList.push(new Student('Nguyen Van A', 1, 9));
    this.studentList.push(new Student('Nguyen Thi B', 0, 8));
    this.studentList.push(new Student('Nguyen Van C', 1, 9));
  }

  ngOnInit(): void {
  }

  fromCreate(student: Student) {
    this.studentList.push(student);
  }

  viewDetail(student: Student) {
    this.studentDetail = student;
  }
}
