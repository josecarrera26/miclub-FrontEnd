import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { ImageData } from '../../../core/models/ImageData.model';

register();

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Carousel {

  images: ImageData[] = [
    {
      id: 1,
      url: 'assets/images/logo/MiClubLogo.png',
      alt: 'Logo Mi Club 1',
      title: 'Sucursal Centro'
    },
    {
      id: 2,
      url: 'assets/images/Carrusel/bannermundial2026.png',
      alt: 'Logo Mi Club 2',
      title: '¡El álbum más grande de la historia ya tiene fecha! Prepárate para coleccionar las 48 selecciones del Mundial 2026. Un desafío épico con 980 cromos y 112 páginas llenas de pasión futbolística. ¡Lanzamiento oficial en mayo!'
    },
    {
      id: 3,
      url: 'assets/images/logo/MiClubLogo.png',
      alt: 'Logo Mi Club 3',
      title: 'Sucursal Sur'
    },
    {
      id: 4,
      url: 'assets/images/logo/MiClubLogo.png',
      alt: 'Logo Mi Club 4',
      title: 'Sucursal Este'
    },
    {
      id: 5,
      url: 'assets/images/logo/MiClubLogo.png',
      alt: 'Logo Mi Club 5',
      title: 'Sucursal Oeste'
    },
  ];

}
