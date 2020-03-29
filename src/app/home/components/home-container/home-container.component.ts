import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TopMenu, ImageSlider, Channel } from 'src/app/shared/components';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class HomeContainerComponent implements OnInit {

  constructor(private router: Router, 
              private homeService: HomeService,
              private route: ActivatedRoute) { }

  menus: TopMenu[] = [];
  selectedTabLink$: Observable<string>;

  startDate: Date = new Date(2020, 3, 25, 9, 47, 10);
  endDate: Date = new Date(2020, 3, 25, 9, 47, 20);


  tabChanged(menu: TopMenu) {
    this.router.navigate(['home', menu.link]);
  }

  ngOnInit(): void {
    this.menus = this.homeService.getMenus();
    this.selectedTabLink$ = this.route.firstChild.paramMap.pipe(
      filter(params => params.has('tabLink')),
      map(params => params.get('tabLink'))
    );
  }

  handleTabSelected(topMenu: TopMenu) {
    this.router.navigate(['home', topMenu.link]);
  }

}
