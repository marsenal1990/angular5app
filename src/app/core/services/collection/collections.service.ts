import { Injectable } from '@angular/core';
import { COLLECTION } from './collection';
import { Item } from '../../../shared/models/item';

@Injectable()
export class CollectionsService {
  
  private _collection: Item[];

  constructor() {
    this.collection = COLLECTION;
  }

  get collection() {
    return this._collection;
  }

  set collection(collection) {
    this._collection = collection;
  }

}
