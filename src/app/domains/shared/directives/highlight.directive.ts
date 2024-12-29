import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[Highlight]',
  standalone: true
})
export class HighlightDirective {

  //sirve para manipular el DOM directamente
  element = inject(ElementRef);

  constructor() { }

  ngOnInit(){
    this.element.nativeElement.style.backgroundColor = 'red';
  }

}
