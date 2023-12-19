import { Injectable } from '@angular/core';
import { FetcherService } from './fetcher.service';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fetcher: FetcherService) { }

  userList: User[] = [];

  getAllUsers() {
    this.fetcher.getUsers().subscribe((data) => {
      this.userList = data;
    });
  }

  getUser(id:number) {
    return this.fetcher.getUserById(id);
  }

  postUser(user: User) {
    return this.fetcher.postUser(user);
  }

  deleteUser(id:number) {
    return this.fetcher.deleteUser(id);
  }

  updateUser(user: User) {
    return this.fetcher.updateUser(user);
  }

}
