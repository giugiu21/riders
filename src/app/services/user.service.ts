import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, of} from 'rxjs';
import { USERS } from '../mocks/user.mock';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userRole = new ReplaySubject();
  datiUtente = new ReplaySubject();

  constructor() { }

  insertUser(user: any):Observable<any>{
    (USERS).push(user);
    return of (USERS);
  }
  
}
