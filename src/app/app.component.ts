import { Component } from '@angular/core';
import { CollectionsService } from './core/services/collection/collections.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'WEB APP';

  constructor(private collectionsService: CollectionsService) {

    
  }


}
