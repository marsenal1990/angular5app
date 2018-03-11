import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { AddComponent } from './containers/add/add.component';
import { EditComponent } from './containers/edit/edit.component';

const routes: Routes = [
  { path: 'list', component: ListItemsComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit/:id', component: EditComponent },

];
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [
    RouterModule
  ],
})
export class ItemsRoutingModule { }
