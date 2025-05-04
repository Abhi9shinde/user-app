import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  user = { name: '', email: '', password: '' };

  constructor(private userService: UserService, private router: Router) {}

  register() {
    this.userService.register(this.user);
    this.router.navigate(['/login']);
  }
}
