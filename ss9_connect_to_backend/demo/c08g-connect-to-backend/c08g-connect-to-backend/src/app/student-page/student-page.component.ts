import {Component, OnInit} from '@angular/core';
import {Student} from '../student';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent implements OnInit {

  studentList: Student[];

  constructor(private studentService: StudentService) {
    this.studentService.findAll().subscribe(value => {
      this.studentList = value;
    }, error => {
      console.log('error');
    }, () => {
      console.log('complete');
    });
  }

  ngOnInit(): void {
  }

}
