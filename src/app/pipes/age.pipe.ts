import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(dob: string): number {
    //format of date of birth in the database "YYYY-MM-DDTHH:MM:SS"
    let split = dob.split('-');
    let playerYear: number = parseInt(split[0])
    let playerMonth: number = parseInt(split[1])

    // Return today's date and time
    let currentDate = new Date();

    // returns the month (from 0 to 11)
    let currentMonth: number = currentDate.getMonth() + 1
    // returns the year (four digits)
    let currentYear: number = currentDate.getFullYear()
    let age: number;
    if(currentMonth > playerMonth){
      age = currentYear - playerYear
    }
    else {
      age = currentYear - playerYear - 1
    }
    return age;
  }

}
