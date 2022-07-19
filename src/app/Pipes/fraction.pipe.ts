import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fraction'
})
export class FractionPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    let fraction = value.toString().split('.')[1];

    if (!fraction)
      fraction = "00";
    else if ( fraction.length == 1)
      fraction += "0";

    return fraction;
  }

}
