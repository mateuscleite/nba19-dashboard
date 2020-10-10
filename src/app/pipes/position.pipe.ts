import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'position'
})
export class PositionPipe implements PipeTransform {

  transform(abbrevPosition: string): string {
    let position : string = '';
    switch(abbrevPosition){
      case('PG'):
        position = 'Point Guard';
        break;
      case('SG'):
        position = 'Shooting Guard';
        break;
      case('SF'):
        position = 'Small Forward';
        break;
      case('PF'):
        position = 'Power Forward';
        break;
      case('C'):
        position = 'Center';
        break;
      default:
        break;
    }
    return position;
  }

}
