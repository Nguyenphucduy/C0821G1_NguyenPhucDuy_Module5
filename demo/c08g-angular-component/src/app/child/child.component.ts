import {Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges , DoCheck{
  @Input()
  valueFormParent: string;

  valueToParent = 'hello parent (output)';

  doCheck: string;

  @Output()
  eventEmitter = new EventEmitter();

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  sendToParent() {
    this.eventEmitter.emit(this.valueToParent);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChange');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
}
