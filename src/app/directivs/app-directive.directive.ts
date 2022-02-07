import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAppDirective]',
})
export class AppDirectiveDirective {
  @HostListener('mouseover') onMouseOver() {
    this.change('black');
  }
  constructor(private el: ElementRef) {}
  change(color: any) {
    this.el.nativeElement.style.color = color;
  }
}
