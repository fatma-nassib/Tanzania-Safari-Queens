import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name:'stars' })
export class StarsPipe implements PipeTransform {
  transform(n: number): string { return '★'.repeat(Math.round(n)) + '☆'.repeat(5-Math.round(n)); }
}
