import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pite-test',
  templateUrl: './pite-test.component.html',
  styleUrls: ['./pite-test.component.css']
})
export class PiteTestComponent implements OnInit {

  str = 'HeLLo PIte';
  num = 16;

  constructor() { }

  ngOnInit(): void {
  }

}
