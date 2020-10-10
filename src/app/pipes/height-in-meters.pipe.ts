import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heightInMeters'
})
export class HeightInMetersPipe implements PipeTransform {

  transform(heightInches): string {
    let heightMeters = heightInches/39.37;
    return heightMeters.toFixed(2);
  }

}
