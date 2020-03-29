import { Directive,  HostBinding, Input, HostListener  } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[gridItemImage]'
})
export class GridItemImageDirective {
  @HostBinding('style.width')
  @HostBinding('style.height')
  @Input() gridItemImage = '2rem';

  @HostBinding('style.grid-area') area = 'image';
  @HostBinding('object-fit') cover = 'cover';

  @HostListener('click', ['$event'])
  handleClick(ev) {
    console.log(ev);
  }


}
