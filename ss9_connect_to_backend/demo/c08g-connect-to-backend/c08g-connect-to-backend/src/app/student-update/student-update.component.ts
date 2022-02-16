import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Student} from '../student';
import {StudentService} from '../student.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {

  studentForm: FormGroup;
  studentObj: Student = new Student();

  constructor(private studentService: StudentService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    const studentId = this.activatedRoute.snapshot.params.id;

    this.studentService.findById(Number(studentId)).subscribe(value => {
        this.studentObj = value;
      }, error => {
      },
      () => {
        this.studentForm.patchValue({
          name: this.studentObj.name,
          dateOfBirth: this.studentObj.dateOfBirth
        });
      });

    this.studentForm = new FormGroup({
      name: new FormControl('', [Validators.required,
        Validators.pattern('[A-Za-z ]+')]),
      dateOfBirth: new FormControl('', [Validators.required,
        this.validateAge18])
    });
  }

  ngOnInit(): void {
  }

  updateInfoStudent(): void {
    const studentUpdate = Object.assign({}, this.studentForm.value);
    console.log(studentUpdate);
    studentUpdate.id = this.studentObj.id;

    this.studentService.save(studentUpdate).subscribe(value => {
    }, error => {},
      () => {
        this.router.navigateByUrl('');
      });
  }

  validateAge18(dateOfBirthControl: AbstractControl): any {
    let dateOfBirthValue = dateOfBirthControl.value;
    // yyyy-mm-dd
    let year = Number(dateOfBirthValue.substr(0, 4));
    let currentYear = new Date().getFullYear();

    return currentYear - year >= 18 ? null : {invalid18: true};
  }

}
