import { Directive,  HostBinding, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[gridItemTitle]'
})
export class GridItemTitleDirective {
  @HostBinding('style.font-size') @Input() appGridItemTitle = '0.5rem';
  @HostBinding('style.grid-area') area = 'title';
  @HostBinding('style.white-space') wrap = 'nowrap';

}
