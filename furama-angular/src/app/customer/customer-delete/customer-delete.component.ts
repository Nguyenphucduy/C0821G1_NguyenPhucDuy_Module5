import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Customer} from '../model/customer';
import {CustomerService} from '../customer.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {

  customerForm: FormGroup;
  customer: Customer = new Customer();
  customerId: number;

  constructor(private customerService: CustomerService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    const customerId = this.activatedRoute.snapshot.params.id;
    this.customerId = customerId;

    this.customerService.findById(Number(customerId)).subscribe(value => {
        this.customer = value;
      }, error => {
      },
      () => {
        this.customerForm.patchValue({
          firstName: this.customer.firstName,
          lastName: this.customer.lastName,
          dateOfBirth: this.customer.dateOfBirth,
          gender: this.customer.gender,
          phone: this.customer.phone,
          email: this.customer.email,
          address: this.customer.address
        });
      });

    this.customerForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      dateOfBirth: new FormControl(),
      gender: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
      address: new FormControl()
    });
  }

  ngOnInit() {
  }

  deleteCustomer(customerId: number) {
    this.customerService.deleteCustomer(customerId).subscribe(value => {
    }, error => {
    }, () => {
      this.router.navigateByUrl('');
    });
  }

}
