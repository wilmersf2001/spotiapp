import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutos',
  standalone: true,
})
export class MinutosPipe implements PipeTransform {
  transform(value: number): string {
    const minutos = Math.floor(value / 60000);
    const segundos = ((value % 60000) / 1000).toFixed(0);
    return minutos + ':' + (Number(segundos) < 10 ? '0' : '') + segundos;
  }
}
