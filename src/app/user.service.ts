import { Iuser } from '../app/user/Iuser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "https://jsonplaceholder.typicode.com/users"; 



  constructor (private http: HttpClient) {

   }

   fetchAllUsers() {
    return this.http.get<Iuser[]>(this.url); 
   }

}
