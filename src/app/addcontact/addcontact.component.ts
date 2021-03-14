import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User } from '../Models/User';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {

  user: User = new User();

  constructor(private router: Router, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  onSubmit(register) {
    alert("Registration Sucessful");
    this.firestore.collection('Users').doc().set(Object.assign({}, this.user))
    this.router.navigate(['homepage'])
  }

  back() {
    this.router.navigate(['/homepage'])
  }
}
