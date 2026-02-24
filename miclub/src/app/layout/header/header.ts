import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../../core/services/productos';
import { Auth } from '../../core/services/auth';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(private productoService: ProductoService, public auth: Auth) { }

  isLoggedIn = false; // Cambia esto según tu servicio de Auth
  cartCount = 2;      // Ejemplo de productos en el carrito


  onSearch(event: any) {
    this.productoService.updateSearch(event.target.value);
  }
}

