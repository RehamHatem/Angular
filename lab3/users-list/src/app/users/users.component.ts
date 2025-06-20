import { Component, Input, OnChanges } from '@angular/core';
import { User } from './../user';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule , NgClass],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnChanges{
  users : User[]=[
    {
      image: "./../../favicon.ico",
    userName:"reham" ,
    email: "rha772201@gmail.com",
    phone:12358525555,
    verified:true
    },
    {
    image: "./../../favicon.ico",
    userName:"hatem" ,
    email: "ha@gmail.com",
    phone:1558826956,
    verified:false
    },
    {
    image: "./../../favicon.ico",
    userName:"mohammed" ,
    email: "m@gmail.com",
    phone:8888888888888,
    verified:true
    },
    {
      image: "./../../favicon.ico",
    userName:"mahmoud" ,
    email: "mmmm@gmail.com",
    phone:44444444444444,
    verified:false
    }
  ];


  @Input() searchValue: string = '';
  filteredUsers: User[] = [];
   ngOnChanges() {
    console.log("i'm in users");
    
    this.filterUsers();
    console.log(this.filteredUsers);
  }

  filterUsers() {
    this.filteredUsers = this.users.filter(user =>
      user.email.toLowerCase().includes(this.searchValue)
    );
  }

}
