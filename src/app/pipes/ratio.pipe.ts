import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratio'
})
export class RatioPipe implements PipeTransform {

  transform(num: number, den: number): string {
    return (num/den).toFixed(2);
  }

}
