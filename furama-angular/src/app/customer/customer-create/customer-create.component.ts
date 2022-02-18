import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customerForm: FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    dateOfBirth: new FormControl(),
    gender: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    address: new FormControl()
  });

  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit() {
  }

  submit() {
    const customer = this.customerForm.value;
    this.customerService.saveCustomer(customer).subscribe(() => {
      this.customerForm.reset();
      alert('OK');
    }, e => {
      console.log(e);
    }, () => {
      this.router.navigateByUrl('');
    })
    ;
  }

}
