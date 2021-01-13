import { Directive, ViewChild, ElementRef, AfterViewInit, HostListener, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements AfterViewInit {

  constructor(private renderer: Renderer2) { }
@HostBinding('class.open') isOpen = false
  ngAfterViewInit(): void {


  }
  @HostListener('click') toggleListen(){
   this.isOpen = !this.isOpen
  }

}
