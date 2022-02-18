import { Component, OnInit } from '@angular/core';
import {Customer} from '../model/customer';
import {CustomerService} from '../customer.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customer: Customer = new Customer();

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute) {
    const customerId = this.activatedRoute.snapshot.params.id;
    this.customerService.findById(Number(customerId)).subscribe(value => {
      this.customer = value;
    });
  }

  ngOnInit(): void {
  }

}
