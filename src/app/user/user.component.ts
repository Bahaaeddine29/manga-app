import { Component, OnInit} from '@angular/core';
import { UserService } from '../user.service';
import {Iuser} from './Iuser'; 

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user : Iuser [] = []; 
  constructor (private service:UserService) {}

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.service.fetchAllUsers().subscribe (data => {
      this.user = data; 
      console.log(data);
    })
  }

}
