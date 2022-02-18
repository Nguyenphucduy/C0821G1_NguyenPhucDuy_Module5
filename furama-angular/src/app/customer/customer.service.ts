import { Injectable } from '@angular/core';
import {Customer} from './model/customer';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  API_URL = 'http://localhost:3000/customerList';
  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL);
  }
  findById(customerId: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.API_URL + '/' + customerId);
  }
  save(customer: Customer): Observable<void> {
    return this.httpClient.patch<void>(this.API_URL + '/' + customer.id, customer);
  }
  saveCustomer(customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.API_URL, customer);
  }
  deleteCustomer(customerId: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(this.API_URL + '/' + customerId);
  }
}
