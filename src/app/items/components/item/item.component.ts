import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../../shared/models/item';
import { State } from '../../../shared/enum/state.enum';
import { CollectionsService } from '../../../core/services/collection/collections.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input('value') value: Item;
  state = State;
  constructor(private service: CollectionsService) {}

  ngOnInit() {}

  changeState(state: State) {
    this.value.state = state;
  }
  remove() {
    this.service.remove(this.value);
  }


}
