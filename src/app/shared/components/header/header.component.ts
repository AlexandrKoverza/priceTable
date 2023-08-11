import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router, private authService: AuthService) {}

  userName$ = this.authService.userName$;

  exit() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
