import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener, Input,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input('appBetterHighlight') highlightColor = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor;
  @HostBinding('style.color') elementColor: string;


  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    // you can add a flag for such styles as !important as a fourth parameter
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

  // test
  @HostListener('click') mouseclick(eventData: Event) {
    if (this.elRef.nativeElement.style.color === 'red') {
      // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'darkblue');
      this.elementColor = 'darkblue';
    } else {
      // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red');
      this.elementColor = 'red';
    }
  }
  // -----------

}
