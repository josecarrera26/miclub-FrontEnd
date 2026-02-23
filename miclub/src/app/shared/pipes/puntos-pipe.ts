import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'puntos',
})
export class PuntosPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
