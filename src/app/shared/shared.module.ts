import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { StateDirective } from './directive/state/state.directive';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [NavComponent, StateDirective, FormComponent],
  exports: [NavComponent, StateDirective , FormComponent]
})
export class SharedModule { }
