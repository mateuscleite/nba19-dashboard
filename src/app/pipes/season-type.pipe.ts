import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seasonType'
})
export class SeasonTypePipe implements PipeTransform {

  //seasons in the database are classified by number, this pipe translates this code
  transform(season: number): string {
    let seasonType: string = ''
    switch(season){
      case(1):
        seasonType = 'Regular Season';
        break;
      case(2):
        seasonType = 'Preseason';
        break;
      case(3):
        seasonType = 'Postseason';
        break;
      case(4):
        seasonType = 'Offseason';
        break;
      case(5):
        seasonType = 'AllStar';
        break;
      default:
        break;
    }
    return seasonType;
  }

}
