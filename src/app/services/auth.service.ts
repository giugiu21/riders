import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { USERS } from '../mocks/user.mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private UserService: UserService) { }

  saveStorage(res: any){
    const user = {
      username: res.username,
      password: res.password,
    }
    localStorage.setItem('user', JSON.stringify(user));
  }

  login(username: string, password: string): Observable<any>{
    const user = USERS.find(user => user.username == username && user.password == password);
    return of (user);
  }

  isLogged(): boolean{
    return JSON.parse(localStorage.getItem('user'));
  }

  logout(): void{
    localStorage.removeItem('user');
    this.UserService.userRole.next('');
  }
}
