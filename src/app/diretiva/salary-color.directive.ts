import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[SalaryColor]'
})
export class SalaryColorDirective {
  @Input()
  SalaryColor: any;

  constructor(private el: ElementRef) {
    setTimeout(() => {
      this.el.nativeElement.innerHTML = this.SalaryColor;      
    }, 2000);
   }

}
