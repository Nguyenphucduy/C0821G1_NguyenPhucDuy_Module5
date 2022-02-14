import { Component, OnInit } from '@angular/core';
import {Student} from '../student';

@Component({
  selector: 'app-ng-for-and-ng-if-test',
  templateUrl: './ng-for-and-ng-if-test.component.html',
  styleUrls: ['./ng-for-and-ng-if-test.component.css']
})
export class NgForAndNgIfTestComponent implements OnInit {
  public studentList = [];

  constructor() {
    this.studentList.push(new Student(123, 'Nguyen Van A', '2000-01-01', 1));
    this.studentList.push(new Student(456, 'Nguyen Thi B', '2000-01-01', 0));
    this.studentList.push(new Student(789, 'Nguyen Van C', '2000-01-01', 1));
  }

  ngOnInit(): void {
  }

}
