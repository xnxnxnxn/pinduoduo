import { Component, OnInit, Input } from '@angular/core';

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
export class ImageSliderComponent implements OnInit {
  @Input()
  sliders: ImageSlider[] = [];
  constructor() { }

  ngOnInit() {
  }

}
