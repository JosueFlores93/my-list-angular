import { Injectable } from '@angular/core';
import { Item } from '../interfaces/api.interface';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private firestore: AngularFirestore) {  }

  addItem(item: any): Promise<any> {
    return this.firestore.collection('items').add(item);
  }

  getItems(): Observable<any> {
    let i = 'items';
    return this.firestore.collection(i).snapshotChanges();
  }

}
