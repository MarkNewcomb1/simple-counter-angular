import { Component, Input, Output, EventEmitter } from '@angular/core';
import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  @Input() count;

  //https://dzone.com/articles/angular-components-pass-by-reference-or-pass-by-va

  @Output() incrementCountEvent = new EventEmitter();
  @Output() decrementCountEvent = new EventEmitter();
  @Output() resetCounterEvent = new EventEmitter();


  incrementCount() {
    this.incrementCountEvent.emit();
  }
  decrementCount() {
    this.decrementCountEvent.emit();
  }
  resetCount() {
    this.resetCounterEvent.emit();
  }
}
