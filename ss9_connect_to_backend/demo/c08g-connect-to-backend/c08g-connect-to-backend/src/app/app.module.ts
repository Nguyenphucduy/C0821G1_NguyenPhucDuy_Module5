import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {StudentPageComponent} from './student-page/student-page.component';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import {StudentUpdateComponent} from './student-update/student-update.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {StudentRoutingModule} from './student-routing.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StudentPageComponent,
    StudentDetailComponent,
    StudentUpdateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    StudentRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
