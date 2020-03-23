import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Channel, ImageSlider } from 'src/app/shared/components';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private homeService: HomeService,
              private cdr: ChangeDetectorRef
     ) { }
  imageSliders: ImageSlider[] = [];
  channels: Channel[] = [];
  
  selectedTabLink = '';
  ngOnInit(): void {
  
    this.route.paramMap.subscribe(params => {
        console.log('路径参数', params);
        this.selectedTabLink = params.get('tabLink');
        this.cdr.markForCheck();
    })

    this.imageSliders = this.homeService.getImageSlider();
    this.channels = this.homeService.getChannels();
  }

}
