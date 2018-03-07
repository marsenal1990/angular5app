import { Component, OnInit } from '@angular/core';
import { State } from '../../enum/state.enum';
import { Item } from '../../models/item';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
state = State;
stateLibelles = Object.values(State);
etat: State;
newItem: Item;


  constructor() { }

  ngOnInit() {
    this.reset();
        this.etat = State.ALIVRER;
  }
  process() {
  console.log(this.newItem.name);
  this.reset();
  }

  reset() {
    this.newItem = {
      id: '',
      name: '',
      reference: '',
      state: ''
    }
  }
}
