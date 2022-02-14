import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Student} from '../student';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  name: string;
  gender: number;
  point: number;
  student1: Student;

  @Output()
  eventEmitter = new EventEmitter<Student>();

  constructor() { }

  ngOnInit(): void {
  }
  sendToList() {
    this.student1 = new Student(this.name, this.gender , this.point );
    this.eventEmitter.emit(this.student1);
    console.log(this.student1);
  }
}
