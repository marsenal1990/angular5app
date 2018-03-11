import { Injectable } from '@angular/core';
import { COLLECTION } from './collection';
import { Item } from '../../../shared/models/item';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
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

  add(item: Item): void {
    item.id = this.afs.createId();
    this.itemsCollection.doc(item.id).set(item)
      .catch(error => console.log(error));
  }


  getItem(id: string): Observable<Item> {
    const item = this.afs.doc<Item>(`collection/${id}`).valueChanges();
    return item;
  }

  update(item: Item): void {
    this.itemsCollection
      .doc(item.id)
      .update(item)
      .catch(error => console.log(error));
  }
  remove(item: Item): void {
    console.log(item);
    this.itemsCollection
      .doc(item.id)
      .delete()
      .catch(error => console.log(error));
  }
}
