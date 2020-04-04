import { Directive,  HostBinding, Input, HostListener, ElementRef, Renderer2, OnInit  } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[gridItemImage]'
})
export class GridItemImageDirective implements OnInit {
  @Input() gridItemImage = '2rem';
  constructor(private elr: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // 声明自己占据模版中的 image 区块
    this.setStyle('grid-area', 'image');
    this.setStyle('width', this.gridItemImage);
    this.setStyle('height', this.gridItemImage);
    this.setStyle('object-fit', 'cover');
  }

  private setStyle(styleName: string, styleValue: string | number) {
    this.renderer.setStyle(this.elr.nativeElement, styleName, styleValue);
  }
  @HostListener('click', ['$event.target'])
  handleClick(ev) {
    console.log(ev);
  }


}
