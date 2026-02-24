import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Productos {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagenes: string[];
}

@Injectable({ providedIn: 'root' })
export class ProductoService {
  private productos: Productos[] = [
    { id: 1, nombre: 'Zapatillas Pro', descripcion: 'Ideales para correr', precio: 50, imagenes: ['https://picsum.photos/400/300?random=1', 'https://picsum.photos/400/300?random=2'] },
    { id: 2, nombre: 'Camiseta Mi Club', descripcion: 'Algodón 100% premium', precio: 25, imagenes: ['https://picsum.photos/400/300?random=3', 'https://picsum.photos/400/300?random=4'] },
    { id: 3, nombre: 'Gorra Urban', descripcion: 'Estilo moderno para el sol', precio: 15, imagenes: ['https://picsum.photos/400/300?random=5', 'https://picsum.photos/400/300?random=6'] },
    { id: 4, nombre: 'Pantalon Negro', descripcion: 'Pantalon para uso diario', precio: 15, imagenes: ['https://picsum.photos/400/300?random=5', 'https://picsum.photos/400/300?random=6'] },
    { id: 5, nombre: 'Pantalon Negro', descripcion: 'Pantalon para uso diario', precio: 15, imagenes: ['https://picsum.photos/400/300?random=5', 'https://picsum.photos/400/300?random=6'] },
    { id: 6, nombre: 'Pantalon Negro', descripcion: 'Pantalon para uso diario', precio: 15, imagenes: ['https://picsum.photos/400/300?random=5', 'https://picsum.photos/400/300?random=6'] },
    { id: 7, nombre: 'Pantalon Negro', descripcion: 'Pantalon para uso diario', precio: 15, imagenes: ['https://picsum.photos/400/300?random=5', 'https://picsum.photos/400/300?random=6'] },
    { id: 8, nombre: 'Pantalon Negro', descripcion: 'Pantalon para uso diario', precio: 15, imagenes: ['https://picsum.photos/400/300?random=5', 'https://picsum.photos/400/300?random=6'] },
    { id: 9, nombre: 'Pantalon Negro', descripcion: 'Pantalon para uso diario', precio: 15, imagenes: ['https://picsum.photos/400/300?random=5', 'https://picsum.photos/400/300?random=6'] },
    { id: 10, nombre: 'Pantalon Negro', descripcion: 'Pantalon para uso diario', precio: 15, imagenes: ['https://picsum.photos/400/300?random=5', 'https://picsum.photos/400/300?random=6'] },
    { id: 11, nombre: 'Pantalon Negro', descripcion: 'Pantalon para uso diario', precio: 15, imagenes: ['https://picsum.photos/400/300?random=5', 'https://picsum.photos/400/300?random=6'] },
    { id: 12, nombre: 'Pantalon Negro', descripcion: 'Pantalon para uso diario', precio: 15, imagenes: ['https://picsum.photos/400/300?random=5', 'https://picsum.photos/400/300?random=6'] },
    { id: 13, nombre: 'Pantalon Negro', descripcion: 'Pantalon para uso diario', precio: 15, imagenes: ['https://picsum.photos/400/300?random=5', 'https://picsum.photos/400/300?random=6'] },
    { id: 14, nombre: 'Pantalon Negro', descripcion: 'Pantalon para uso diario', precio: 15, imagenes: ['https://picsum.photos/400/300?random=5', 'https://picsum.photos/400/300?random=6'] },
    { id: 15, nombre: 'Pantalon Negro', descripcion: 'Pantalon para uso diario', precio: 15, imagenes: ['https://picsum.photos/400/300?random=5', 'https://picsum.photos/400/300?random=6'] },
    { id: 16, nombre: 'Pantalon Negro', descripcion: 'Pantalon para uso diario', precio: 15, imagenes: ['https://picsum.photos/400/300?random=5', 'https://picsum.photos/400/300?random=6'] },
    { id: 17, nombre: 'Pantalon Negro', descripcion: 'Pantalon para uso diario', precio: 15, imagenes: ['https://picsum.photos/400/300?random=5', 'https://picsum.photos/400/300?random=6'] },
    { id: 18, nombre: 'Pantalon Negro', descripcion: 'Pantalon para uso diario', precio: 15, imagenes: ['https://picsum.photos/400/300?random=5', 'https://picsum.photos/400/300?random=6'] },
    { id: 19, nombre: 'Pantalon Negro', descripcion: 'Pantalon para uso diario', precio: 15, imagenes: ['https://picsum.photos/400/300?random=5', 'https://picsum.photos/400/300?random=6'] },
    { id: 20, nombre: 'Pantalon Negro', descripcion: 'Pantalon para uso diario', precio: 15, imagenes: ['https://picsum.photos/400/300?random=5', 'https://picsum.photos/400/300?random=6'] },
  ];

  private searchTerm = new BehaviorSubject<string>('');
  search$ = this.searchTerm.asObservable();

  getProductos() { return this.productos; }

  updateSearch(term: string) { this.searchTerm.next(term); }

  getProductoById(id: number) {
    return this.productos.find(p => p.id === id);
  }
}