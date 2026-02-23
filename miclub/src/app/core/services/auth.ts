import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private loggedIn = new BehaviorSubject<boolean>(localStorage.getItem('isLogged') === 'true');
  isLoggedIn$ = this.loggedIn.asObservable();

  login() {
    localStorage.setItem('isLogged', 'true');
    this.loggedIn.next(true);
  }

  logout() {
    localStorage.removeItem('isLogged');
    this.loggedIn.next(false);
  }
}
