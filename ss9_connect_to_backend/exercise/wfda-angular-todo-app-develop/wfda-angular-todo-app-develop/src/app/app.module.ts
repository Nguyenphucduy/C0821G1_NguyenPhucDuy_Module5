import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TodoComponent} from './todo/todo.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoUpdateComponent } from './todo-update/todo-update.component';
import { TodoDeleteComponent } from './todo-delete/todo-delete.component';
import { TodoCreateComponent } from './todo-create/todo-create.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoDetailComponent,
    TodoUpdateComponent,
    TodoDeleteComponent,
    TodoCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
