import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {



  @HostBinding('class.show') private isOpen:boolean = false;

  constructor() {

  }
  @HostListener('click') toggleShow() {

  }


}
