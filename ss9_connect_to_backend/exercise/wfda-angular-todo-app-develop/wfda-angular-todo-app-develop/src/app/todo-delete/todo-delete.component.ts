import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TodoService} from '../todo.service';
import {FormControl, FormGroup} from '@angular/forms';
import {TodoClass} from '../todoClass';

@Component({
  selector: 'app-todo-delete',
  templateUrl: './todo-delete.component.html',
  styleUrls: ['./todo-delete.component.css']
})
export class TodoDeleteComponent implements OnInit {
  todoForm: FormGroup;
  todo: TodoClass = new TodoClass();
  todoId: number;

  constructor(private todoService: TodoService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    const todoId = this.activatedRoute.snapshot.params.id;
   // gán todo id= todoId nhận qua URL để nhận giá trị id cần delete
    this.todoId = todoId;

    this.todoService.findById(Number(todoId)).subscribe(value => {
        this.todo = value;
      }, error => {
      },
      () => {
        this.todoForm.patchValue({
          // todoId: this.todo.id,
          content: this.todo.content,
          complete: this.todo.complete
        });
      });

    this.todoForm = new FormGroup({
      content: new FormControl(),
      complete: new FormControl()
    });
  }

  ngOnInit() {
  }

  deleteTodo(todoId: number) {
    // console.log(todoId)
    this.todoService.deleteTodo(todoId).subscribe(value => {
    }, error => {
    }, () => {
      this.router.navigateByUrl('');
    });
    console.log(todoId);
  }
}
