import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[SalaryColor]'
})
export class SalaryColorDirective {
  @Input()
  SalaryColor: any;

  constructor(private element: ElementRef) {
    setTimeout(() => {
      const el = this.element.nativeElement
      
      el.style.color = this.SalaryColor > 1000 ? 'green':'red';

    }, 2000);
   }

}
