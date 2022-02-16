import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TodoService} from '../todo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {
  todoForm: FormGroup = new FormGroup({
    content: new FormControl(),
    complete: new FormControl()
  });

  constructor(private todoService: TodoService,
              private router: Router) {
  }

  ngOnInit() {
  }

  submit() {
    const todo = this.todoForm.value;
    this.todoService.saveTodo(todo).subscribe(() => {
      this.todoForm.reset();
      alert('OK');
    }, e => {
      console.log(e);
    }, () => {
      this.router.navigateByUrl('');
    })
    ;
  }
}
