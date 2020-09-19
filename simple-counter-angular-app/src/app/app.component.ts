import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title:string = 'Simple Counter - Angular';
  count:number;

  ngOnInit() {
    this.count = 5;
  }
  updateCounterUp() {
    this.count = this.count + 1;
  }
  updateCounterDown() {
    this.count = this.count - 1;
  }
  resetCounterToZero() {
    this.count = 0;
  }
}
