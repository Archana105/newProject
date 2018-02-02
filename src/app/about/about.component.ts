import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  dataAdd: any;
  color: any = '';
  constructor(private _data: DataService) { }

  ngOnInit() {
    // this._data.dataValue.subscribe((res: any) => {
    //   this.dataAdd = res;
    // });
    this.dataAdd = this._data.dataValue;
  }
  clickedOnImage() {
    alert('Image is clicked');
    alert('Thankyou 4 clicking')
  }
}
