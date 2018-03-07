import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './shared/components/nav/nav.component';
import { CollectionsService } from './core/services/collection/collections.service';
import { ItemsModule } from './items/items.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports:[
    BrowserModule,
    CommonModule,
    CoreModule,
    SharedModule,
    HomeModule, 
    ItemsModule,
    PageNotFoundModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [CollectionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
