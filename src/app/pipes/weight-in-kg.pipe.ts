import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weightInKg'
})
export class WeightInKgPipe implements PipeTransform {

  transform(weightLbs: number): string {
    return (weightLbs/2.205).toFixed(1) + ' kg';
  }

}
