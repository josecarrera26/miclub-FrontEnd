import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductoService, Productos } from '../../../core/services/productos';
import { Auth } from '../../../core/services/auth';
import { Carousel } from '../../../shared/components/carousel/carousel';


@Component({
  selector: 'app-producto-detalle',
  imports: [CommonModule, Carousel],
  templateUrl: './producto-detalle.html',
  styleUrl: './producto-detalle.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductoDetalle implements OnInit {

  producto: Productos | undefined;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService,
    public auth: Auth
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam) {
      const id = Number(idParam);
      this.producto = this.productoService.getProductoById(id);
    }
  }
}
