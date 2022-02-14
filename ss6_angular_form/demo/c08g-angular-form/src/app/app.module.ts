import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFromTestComponent } from './reactive-from-test/reactive-from-test.component';
import { TeaplateDrivenFromTestComponent } from './teaplate-driven-from-test/teaplate-driven-from-test.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFromTestComponent,
    TeaplateDrivenFromTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
