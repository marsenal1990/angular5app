import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { ItemComponent } from './components/item/item.component';
import { SharedModule } from '../shared/shared.module';
import { AddComponent } from './containers/add/add.component';
import { EditComponent } from './containers/edit/edit.component';
import { AppRoutingModule } from '../app-routing.module';
import { ItemsRoutingModule } from './items-routing.module';

@NgModule({
  imports: [
    CommonModule, SharedModule, ItemsRoutingModule
  ],
  declarations: [ListItemsComponent, ItemComponent, AddComponent, EditComponent],
  exports: [ListItemsComponent, AddComponent]
})
export class ItemsModule { }
