import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from '../Models/User';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private userService: UserService, private firebase: AngularFirestore, private router: Router) { }

  user: User[] = []
  uList;


  ngOnInit(): void {
    this.getList();
  }


  doFilter = (value: string) => {
    this.uList.filter = value.trim().toLocaleLowerCase();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  getList() {
    this.userService.getUser().subscribe(data => {
      this.user = data;
      this.uList = new MatTableDataSource(this.user);
      this.uList.paginator = this.paginator;
      this.uList.sort = this.sort;
    });
  }


  displayedColumns: string[] = ['name', 'phoneNo', 'email', 'address', 'delete'];

  deleteContact(event, data: User) {
    this.userService.Del(data);
  }

  add() {
    this.router.navigate(['/addcontact'])
  }
}
