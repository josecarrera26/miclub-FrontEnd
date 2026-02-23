import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Auth } from '../../core/services/auth';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  permisosAdmin: boolean = false;
  isPrecalificadorOpen: boolean = false;

  constructor(
    private auth: Auth,
    private router: Router
  ) { }

  togglePrecalificador() {
    this.isPrecalificadorOpen = !this.isPrecalificadorOpen;
  }

  onLogout() {
    this.auth.logout();


    this.router.navigate(['/login']);
  }
}
