import { Injectable } from '@angular/core';
import { FetcherService } from './fetcher.service';
import { User } from '../models/User.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fetcher: FetcherService) { }

  userList: User[] = [];
  
  userConnect : User = {
    id : 0,
    username: ""
  }

  /**
   * Le pipe permet d'avoir accès à des données avant qu'elles ne soient renvoyées par l'observable
   * Ici, on utilise tap pour stocker les données renvoyées dans la variable userList. Le tap ne modifie pas les données, il permet juste de les lire.
   * il a donc un effet secondaire sur le flux de données ainsi, ici il permet de stocker les données dans la variable userList
   * Ainsi, lorsque l'on se subscribe à la méthode getAllUsers, il va d'abord hydrater userList puis il retournera les données de l'observable
   * 
   * @returns Observable of User[]
   */
  getAllUsers(): Observable<User[]> {
    return this.fetcher.getUsers().pipe(
        tap((data) => {
            this.userList = data;
        })
    );
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
