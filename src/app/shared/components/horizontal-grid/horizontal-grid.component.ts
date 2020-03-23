import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Emoji } from '../../decorators';


export interface Channel {
  id: number;
  title: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class HorizontalGridComponent implements OnInit {
 
  @Input() cols = 6;
  @Input() displayCols = 4;
  sliderMargin = '0';
  
 

 

  constructor() { }

  ngOnInit(): void {
  }

  public get scrollable(): boolean {
    return this.cols > this.displayCols;
  }

  public get templateRows(): string {
    return `minmax(auto, max-content)`;
  }

  public get templateColumns(): string {
    return `repeat(${this.cols}, calc((100vw - ${this.displayCols *
      0.4}rem) / ${this.displayCols}))`;
  }

  public handleScroll(ev) {
    this.sliderMargin = `0 ${(100 * ev.target.scrollLeft) /
      ev.target.scrollWidth}%`;
  }

}
