import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
dataAdd: any;
  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.dataValue.subscribe((res: any) => {
      this.dataAdd = res;
    });
  }

}
