import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Channel, ImageSlider } from 'src/app/shared/components';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';


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
  
  selectedTabLink$: Observable<string>;
  
  ngOnInit(): void {
    this.selectedTabLink$ = this.route.paramMap.pipe(
      filter(params => params.has('tabLink')),
      map(params => params.get('tabLink'))
    );

    this.imageSliders = this.homeService.getImageSlider();
    this.channels = this.homeService.getChannels();
  }

}
