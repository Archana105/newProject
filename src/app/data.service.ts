import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
@Injectable()
export class DataService {
private data = new BehaviorSubject<any>(['Hello welcom!!', 'Jsut go to Hell !!']);
dataValue = this.data.asObservable();
  constructor() { }

  changeValue(dataValue) {
    this.data.next(dataValue);
  }

}
