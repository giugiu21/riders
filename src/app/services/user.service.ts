import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, of} from 'rxjs';
import { USERS } from '../mocks/user.mock';
import { RIDERS } from '../mocks/rider.mock';
import { RESTAURANT_OWNERS } from '../mocks/restaurant-owner.mock';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  insertUser(user: any):Observable<any>{
    (USERS).push(user);
    return of (USERS);
  }

  getRider(id: any):Observable<any>{
    const rider = RIDERS.find(rider => rider._id == id);
     return of (rider);
  }

  getOwner(id: any):Observable<any>{
    const owner = RESTAURANT_OWNERS.find(owner => owner._id == id);
     return of (owner);
  }
  
}
