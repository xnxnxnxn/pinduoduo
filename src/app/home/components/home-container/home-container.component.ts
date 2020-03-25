import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TopMenu, ImageSlider, Channel } from 'src/app/shared/components';
import { Router } from '@angular/router';
import { HomeService } from '../../services';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class HomeContainerComponent implements OnInit {

  constructor(private router: Router, private homeService: HomeService) { }

  menus: TopMenu[] = [];

  startDate: Date = new Date(2020, 3, 25, 9, 47, 10);
  endDate: Date = new Date(2020, 3, 25, 9, 47, 20);


  tabChanged(menu: TopMenu) {
    this.router.navigate(['home', menu.link]);
  }

  ngOnInit(): void {
    this.menus = this.homeService.getMenus();
  }

}
