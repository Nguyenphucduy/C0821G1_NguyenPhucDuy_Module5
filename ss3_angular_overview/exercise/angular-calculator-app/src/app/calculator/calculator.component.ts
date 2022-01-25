import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  numberOne: number ;
  numberTwo: number;
  result: number;
  operator: string;

  constructor() { }

  ngOnInit(): void {
  }

  calculator(operator) {

    switch (operator) {
      case '+':
        this.result = Number(this.numberOne) + Number(this.numberTwo);
        break;
      case '-':
        this.result = Number(this.numberOne) - Number(this.numberTwo);
        break;
      case '*':
        this.result = Number(this.numberOne) * Number(this.numberTwo);
        break;
      case '/':
        this.result = Number(this.numberOne) / Number(this.numberTwo);
        break;
    }
  }
}
