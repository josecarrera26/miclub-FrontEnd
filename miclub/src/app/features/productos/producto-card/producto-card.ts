import { Component, Input, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Productos } from '../../../core/services/productos';
import { Auth } from '../../../core/services/auth';

@Component({
  selector: 'app-producto-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './producto-card.html',
  styleUrl: './producto-card.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductoCard {
  auth = inject(Auth);

  @Input({ required: true }) producto!: Productos;
}
