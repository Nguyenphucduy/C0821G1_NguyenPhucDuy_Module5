import { Component, OnInit } from '@angular/core';
import {TodoClass} from '../todoClass';
import {TodoService} from '../todo.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  todo: TodoClass = new TodoClass();

  constructor(private todoService: TodoService,
              private activatedRoute: ActivatedRoute) {
    const todoId = this.activatedRoute.snapshot.params.id;
    this.todoService.findById(Number(todoId)).subscribe(value => {
      this.todo = value;
    });
  }

  ngOnInit() {
  }

}
