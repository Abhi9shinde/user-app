import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  user: any = {};
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.user = this.userService.getProfile();
    if (!this.user.name) {
      this.router.navigate(['/login']);
    }
  }
  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
