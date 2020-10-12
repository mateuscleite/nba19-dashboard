import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratio'
})
export class RatioPipe implements PipeTransform {

  //returns the ratio between two numbers
  transform(num: number, den: number): string {
    return (num/den).toFixed(2);
  }

}
