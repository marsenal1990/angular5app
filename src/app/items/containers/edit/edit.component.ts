import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Item } from '../../../shared/models/item';
import { CollectionsService } from '../../../core/services/collection/collections.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  item: Item;
  id: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private collectionService: CollectionsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => this.item = data['item']);
  }

  process(item: Item): void {
    this.updateItem(item);
  }

  updateItem(item: Item): void {
    this.collectionService.update(item);
    this.router.navigate(['/items/list']);
  }
}
