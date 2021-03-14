import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../Models/User';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Observable<User[]>

  user: AngularFirestoreDocument<User>;
  contact: AngularFirestoreCollection<User>

  constructor(private firestore: AngularFirestore) {

    this.contact = firestore.collection<User>('Users');
    this.users = this.contact.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }


  getUser(): Observable<any> {
    return this.users;
  }

  Del(data: User) {
    this.user = this.firestore.doc(`Users/${data.id}`);
    console.log(this.user);
    this.user.delete();

  }

}
