import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoComponent} from './todo/todo.component';
import {TodoDetailComponent} from './todo-detail/todo-detail.component';
import {TodoUpdateComponent} from './todo-update/todo-update.component';
import {TodoDeleteComponent} from './todo-delete/todo-delete.component';
import {TodoCreateComponent} from './todo-create/todo-create.component';


const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: TodoComponent},
  {path: 'detail/:id', component: TodoDetailComponent},
  {path: 'update/:id', component: TodoUpdateComponent},
  {path: 'delete/:id', component: TodoDeleteComponent},
  {path: 'create', component: TodoCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
