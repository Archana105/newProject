import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('dataAdd', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),
        query(':enter', stagger('300ms', [
            animate('.6s ease-in', keyframes([
              style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
              style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
              style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
            ]))]), {optional: true}),
            query(':leave', stagger('300ms', [
                animate('.6s ease-in', keyframes([
                  style({opacity: 1, transform: 'translateY(0)', offset: 0}),
                  style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
                  style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0})
                ]))]), {optional: true})
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  data: any = 'Hello every One';
  dataAdd: any = [];
  btntxt: any = 'Add Items';
  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.dataValue.subscribe((res: any) => {
      this.dataAdd = res;
    });
    this._data.changeValue(this.dataAdd);
  }

addItem() {
  this.dataAdd.push(this.data)
  this.data = '';
  this._data.changeValue(this.dataAdd);
}

removeItem(i) {
  this.dataAdd.splice(i, 1);
    this._data.changeValue(this.dataAdd);
}
}
