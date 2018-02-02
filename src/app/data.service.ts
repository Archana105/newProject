import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
@Injectable()
export class DataService {
private data = new BehaviorSubject<any>(['Hello welcome!!', 'Just go to Hell !!', 'welcome Again', 'Golmal Golmal']);
// private data = new BehaviorSubject<any>([]);
dataValue = this.data.asObservable();
  constructor() { }

  changeValue(dataValue) {
    this.data.next(dataValue);
    // return dataValue;
  }

}
