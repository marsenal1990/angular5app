import { Directive, HostBinding , Input, OnInit } from '@angular/core';
import { State } from '../../enum/state.enum';

@Directive({
  selector: '[appState]',
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[class]': 'state'
  }
})
export class StateDirective  {
  @Input() appState;

  constructor() {}

  get state() {
    return this.appState === State.ENCOURS ? 'badge badge-primary' :
    this.appState === State.ALIVRER ? 'badge badge-danger' : 'badge badge-success';
  }

}
