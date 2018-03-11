import { Component, OnInit } from '@angular/core';
import { CollectionsService } from '../../../core/services/collection/collections.service';
import { Item } from '../../../shared/models/item';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  collection: Observable<Item[]>;

  constructor(private collectionService: CollectionsService) { }

  ngOnInit() {
    this.collection = this.collectionService.collection;
  }

}
