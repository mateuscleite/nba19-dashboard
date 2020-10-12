import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weightInKg'
})
export class WeightInKgPipe implements PipeTransform {

  //converts from lbs to kg
  transform(weightLbs: number): string {
    return (weightLbs/2.205).toFixed(1) + ' kg';
  }

}
