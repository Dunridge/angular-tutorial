import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    // you can add a flag for such styles as !important as a fourth parameter
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  }

  // test
  @HostListener('click') mouseclick(eventData: Event) {
    if (this.elRef.nativeElement.style.color === 'red') {
      this.renderer.setStyle(this.elRef.nativeElement, 'color', 'darkblue');
    } else {
      this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red');
    }
  }
  // -----------

}
