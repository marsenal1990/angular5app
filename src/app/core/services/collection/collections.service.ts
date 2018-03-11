import { Injectable } from '@angular/core';
import { COLLECTION } from './collection';
import { Item } from '../../../shared/models/item';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CollectionsService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  private _collection: Observable<Item[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('collection');
    this.collection = this.itemsCollection.valueChanges();
  }

  get collection(): Observable<Item[]> {
    return this._collection;
  }

  set collection(collection) {
    this._collection = collection;
  }

  add(item: Item) {
    this.itemsCollection.add(item);
  }
  remove(item: Item) {
   // this.itemsCollection.auditTrail(item);
   console.log('remove');
 }

  // findById(id: string): Item {
  //   return this.collection.find(item => item.id === id);
  // }
}
