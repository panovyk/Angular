import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyValue'
})

export class CurrencyValuePipe implements PipeTransform {

  transform(value: number, currency: number): number {
    return Math.pow(25.8, currency)
  }

}
