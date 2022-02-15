import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { StudentUpdateComponent } from './student-update/student-update.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailComponent,
    StudentPageComponent,
    StudentUpdateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
