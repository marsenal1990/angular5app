import { Component, OnInit } from '@angular/core';
import { Item } from '../../../shared/models/item';
import { CollectionsService } from '../../../core/services/collection/collections.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  constructor(private service: CollectionsService, private router: Router) {}

  ngOnInit() {}

  addItem(item: Item) {
    this.service.add(item);
    this.router.navigate(['/items/list']);
  }
}
