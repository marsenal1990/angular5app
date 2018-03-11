import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CollectionsService } from '../collection/collections.service';
import { Item } from '../../../shared/models/item';
import 'rxjs/add/operator/take';
@Injectable()
export class ItemDetailResolverService implements Resolve<Item> {

  constructor(
    private collectionService: CollectionsService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Item> {
    // tslint:disable-next-line:prefer-const
    let id = route.paramMap.get('id');
    return this.collectionService.getItem(id).take(1).map(data => {
      if (data) {
        return data;
      } else { // if not found
        this.router.navigate(['/items/list']);
        return null;
      }
    });
  }
}
