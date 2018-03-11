import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  private _title: string;
  public isCollapsed = true;
  constructor() { }

  ngOnInit() {
    this.title = 'My App';
  }

  get title() {
    return this._title;
  }
  set title(title: string) {
    this._title = title;
  }



}
