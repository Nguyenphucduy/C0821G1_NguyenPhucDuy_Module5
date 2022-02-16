import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {TodoClass} from '../todoClass';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css']
})
export class TodoUpdateComponent implements OnInit {
  todoForm: FormGroup;
  todo: TodoClass = new TodoClass();
  constructor(private todoService: TodoService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    const todoId = this.activatedRoute.snapshot.params.id;

    this.todoService.findById(Number(todoId)).subscribe(value => {
        this.todo = value;
      }, error => {
      },
      () => {
        this.todoForm.patchValue({
          content: this.todo.content,
          complete: this.todo.complete
        });
      });

    this.todoForm = new FormGroup({
      content: new FormControl(),
      complete: new FormControl()
    });
  }
  updateInfoTodo(): void {
    const todoUpdate = Object.assign({}, this.todoForm.value);
    // console.log(todoUpdate);
    todoUpdate.id = this.todo.id;

    this.todoService.save(todoUpdate).subscribe(value => {
      }, error => {},
      () => {
        this.router.navigateByUrl('');
      });
  }
  ngOnInit() {
  }

}
