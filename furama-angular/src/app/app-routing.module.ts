import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CustomerComponent} from './customer-list/customer.component';
import {CustomerDetailComponent} from './customer-detail/customer-detail.component';
import {CustomerUpdateComponent} from './customer-update/customer-update.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerDeleteComponent} from './customer-delete/customer-delete.component';


const routes: Routes = [
  {path: '', redirectTo: 'customerList', pathMatch: 'full'},
  {path: 'customerList', component: CustomerComponent},
  {path: 'detail/:id', component: CustomerDetailComponent},
  {path: 'update/:id', component: CustomerUpdateComponent},
  {path: 'create', component: CustomerCreateComponent},
  {path: 'delete/:id', component: CustomerDeleteComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ]
})
export class AppRoutingModule { }
