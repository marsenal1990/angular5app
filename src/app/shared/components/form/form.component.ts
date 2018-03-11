import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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

    Observable.combineLatest([
      this.activatedRoute.paramMap,
      this.activatedRoute.url
    ]).subscribe(response => {
      this.id = response[0].get('id');
      this.opp = (response[1])[0].path;
      this.createForm();
     });
  }

  createForm() {
    this.form = this.fb.group({
      id: '',
      name: ['', Validators.required],
      reference: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(8)
        ])
      ],
      state: State.ALIVRER
    });
    if (this.opp === 'edit') {
    //  this.form.setValue(this.service.findById(this.id));
    }
  }

  process() {
    this.newItem.emit(this.form.value);
    this.form.reset();
    this.form.get('state').setValue(State.ALIVRER);
  }

  isError(val: string): boolean {
    return this.form.get(val).invalid && this.form.get(val).touched;
  }
}
