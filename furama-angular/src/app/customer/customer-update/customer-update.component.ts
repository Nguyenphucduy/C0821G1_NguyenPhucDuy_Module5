import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Customer} from '../model/customer';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

  customerForm: FormGroup;
  customer: Customer = new Customer();
  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    const todoId = this.activatedRoute.snapshot.params.id;

    this.customerService.findById(Number(todoId)).subscribe(value => {
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
  updateInfoCustomer(): void {
    const todoUpdate = Object.assign({}, this.customerForm.value);
    todoUpdate.id = this.customer.id;

    this.customerService.save(todoUpdate).subscribe(value => {
      }, error => {},
      () => {
        this.router.navigateByUrl('');
      });
  }
  ngOnInit() {
  }
}
