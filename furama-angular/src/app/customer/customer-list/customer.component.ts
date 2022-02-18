import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Customer} from '../model/customer';
import {CustomerService} from '../customer.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerList: Customer[] = [];

  constructor(private customerService: CustomerService) {
    this.customerService.findAll().subscribe(value => {
      this.customerList = value;
    }, error => {
      console.log('error');
    }, () => {
      console.log('complete');
    });
  }

  ngOnInit(): void {
  }

}
