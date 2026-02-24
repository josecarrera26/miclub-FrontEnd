import { Component, OnInit } from '@angular/core';
import { Carousel } from '../../../shared/components/carousel/carousel';
import { Productos, ProductoService } from '../../../core/services/productos';
import { ProductoCard } from '../producto-card/producto-card';
import { Auth } from '../../../core/services/auth';

@Component({
  selector: 'app-productos-list',
  imports: [Carousel, ProductoCard],
  templateUrl: './productos-list.html',
  styleUrl: './productos-list.css',
})
export class ProductosList implements OnInit {
  productosFiltrados: Productos[] = [];
  allProductos: Productos[] = [];

  constructor(private productoService: ProductoService, public auth: Auth) { }

  ngOnInit() {
    this.allProductos = this.productoService.getProductos();

    this.productoService.search$.subscribe(term => {
      this.productosFiltrados = this.allProductos.filter(p =>
        p.nombre.toLowerCase().includes(term.toLowerCase()) ||
        p.descripcion.toLowerCase().includes(term.toLowerCase())
      );
    });
  }
}
