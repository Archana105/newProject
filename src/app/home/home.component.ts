import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { DataService } from '../data.service';
import { Meta } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
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
  checkCondition: boolean = false;
//  asyncObserve: any;
user: Observable<{}>;
authData: any = [];
  constructor(private _data: DataService, private meta: Meta) {
     this.meta.addTag({ name: 'description', content: 'How to use Angular 4 meta service 333' });
     this.meta.addTag({name: 'Archana'})
     this.meta.addTags([
      {name: 'description', content: 'How to use Angular 4 meta service'},
      {name: 'author', content: 'talkingdotnet'},
      {name: 'keywords', content: 'Angular, Meta Service'}
    ]);
     const author = this.meta.getTags('name=description');
     for (let i = 0; i < author.length; i++) {
        this.authData.push(author[i].content)
     }
   this.meta.updateTag({ name: 'description', content: 'Angular 4 meta service' });
   const checkinTag = this.meta.getTag('name="author"');
   const value = this.meta.removeTagElement(checkinTag);
    const checkinTagAvailable = this.meta.getTag('name="author"');
  }

  ngOnInit() {
    this._data.dataValue.subscribe((res: any) => {
      this.dataAdd = res;
      //this.user = this.dataAdd
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
