import { Pipe, PipeTransform } from '@angular/core';
import { strict } from 'assert';
@Pipe({
  name: 'toArray',
})
export class ToArrayPipe implements PipeTransform {
  transform(value: number): string[] {
    return value !== null ? String(value).split('') : [];
  }
}
