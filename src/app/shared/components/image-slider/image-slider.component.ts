import { Component, OnInit, Input, AfterViewInit, OnDestroy, Renderer2, ViewChild, ElementRef } from '@angular/core';

export interface ImageSlider {
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.less']
})
export class ImageSliderComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input()
  sliders: ImageSlider[] = [];
  // 图片高度
  @Input()
  sliderHeight = 160;
  // 播放间隔时间单位 s
  @Input() 
  intervalBySeconds = 2;

  @ViewChild('imageSlider', { static: true })
  imgSlider: ElementRef;
  // 定时播放
  intervalId;
  // 当前滚动下标
  selectedIndex = 0;

  constructor(private rd2: Renderer2) { }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }


  ngAfterViewInit(): void {
    if (this.intervalBySeconds <= 0) {
      return;
    }
    this.intervalId = setInterval(() => {
        // 使用rd2让组件向左滑动
        this.rd2.setProperty(
          this.imgSlider.nativeElement,
          'scrollLeft',
          (this.getIndex(++this.selectedIndex) *
          this.imgSlider.nativeElement.scrollWidth) /
          this.sliders.length
        );
    }, this.intervalBySeconds * 1000);
  }

  getIndex(idx: number): number {
    console.log(idx);
    return idx >= 0
      ? idx % this.sliders.length
      : this.sliders.length - (Math.abs(idx) % this.sliders.length);
  }

  handleScroll(ev) {
    const ratio =
      ev.target.scrollLeft / (ev.target.scrollWidth / this.sliders.length);
    this.selectedIndex = Math.round(ratio);
  }

  ngOnInit() {
  }

}
