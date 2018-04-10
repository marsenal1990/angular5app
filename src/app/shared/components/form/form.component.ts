import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { State } from '../../enum/state.enum';
import { Item } from '../../models/item';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CollectionsService } from '../../../core/services/collection/collections.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() newItem: EventEmitter<Item> = new EventEmitter();
  @Input() titleForm: string;
  @Input() item: Item;
  state = State;
  stateLibelles = Object.values(State);
  form: FormGroup;
  private id: string;
  private opp: string;
  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private service: CollectionsService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: [
        this.item ? this.item.name : '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],
      reference: [
        this.item ? this.item.reference : '',
        Validators.compose([Validators.required, Validators.minLength(4)])
      ],
      state: [this.item ? this.item.state : State.ALIVRER]
    });
  }

  getItem(): Item {
    const data = this.form.value as Item;
    if (!this.item) {
      return data;
    }
    const id = this.item.id;
    return { id, ...data };
  }

  process(): void {
    const datas = this.getItem();
    this.newItem.emit(datas);
    this.reset();
  }
  reset(): void {
    this.form.reset();
    this.form.get('state').setValue(State.ALIVRER);
  }
  isError(val: string): boolean {
    return this.form.get(val).dirty && this.form.get(val).hasError('minlength');
  }
}
