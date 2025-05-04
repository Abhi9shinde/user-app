import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private storageKey = 'userData';
  private loggedInKey = 'loggedInUser';

  register(user: any) {
    localStorage.setItem(this.storageKey, JSON.stringify(user));
  }

  login(email: string, password: string): boolean {
    const user = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
    if (user.email === email && user.password === password) {
      localStorage.setItem(this.loggedInKey, JSON.stringify(user));
      return true;
    }
    return false;
  }

  getProfile(): any {
    return JSON.parse(localStorage.getItem(this.loggedInKey) || '{}');
  }

  logout() {
    localStorage.removeItem(this.loggedInKey);
  }
}
