import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizar',
  standalone: true,
})
export class CapitalizarPipe implements PipeTransform {
  transform(value: string): string {
    const nombre = value.split(' ');
    const nombreCapitalizado = nombre.map((palabra) => {
      return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    let response = nombreCapitalizado.join(' ');

    return response;
  }
}
