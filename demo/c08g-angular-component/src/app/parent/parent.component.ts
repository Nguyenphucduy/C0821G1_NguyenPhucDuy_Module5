import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  valueToChild = 'hello child (input)!';

  valueFromChild: string;

  constructor() { }

  ngOnInit(): void {
  }

  receiveFromChild($event: any) {

    console.log($event + 'Output child -> parent');
    this.valueFromChild = $event;
  }
}
