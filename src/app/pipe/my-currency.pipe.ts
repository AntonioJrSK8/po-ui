import { formatCurrency, formatNumber } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCurrency'
})
export class MyCurrencyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    
    // console.log(formatNumber(parseFloat(value as string),'pt-BR','2'));
    return `R$ ${value}`;
  }

}
