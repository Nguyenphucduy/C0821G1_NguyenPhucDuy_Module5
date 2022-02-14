import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { StockStatusComponent } from './stock-status/stock-status.component';
import { NgForAndNgIfTestComponent } from './ng-for-and-ng-if-test/ng-for-and-ng-if-test.component';
import { NgStyleAndNgClassTestComponent } from './ng-style-and-ng-class-test/ng-style-and-ng-class-test.component';
import {FormsModule} from '@angular/forms';
import { PiteTestComponent } from './pite-test/pite-test.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    ProductPageComponent,
    StockStatusComponent,
    NgForAndNgIfTestComponent,
    NgStyleAndNgClassTestComponent,
    PiteTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
