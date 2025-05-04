import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email = '';
  password = '';
  error = false;

  constructor(private userService: UserService, private router: Router) {}
  login() {
    if (this.userService.login(this.email, this.password)) {
      this.router.navigate(['/profile']);
    } else {
      this.error = true;
    }
  }
}
