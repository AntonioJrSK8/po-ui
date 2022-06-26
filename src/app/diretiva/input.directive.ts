import { Directive, ElementRef } from '@angular/core';

@Directive({
  // selector: '[appInput]'
  selector: 'input'
})
export class InputDirective {

  constructor(private element:ElementRef) { }

  focus() {
    this.element.nativeElement.focus()
  }

}
