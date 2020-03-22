import { Component, OnInit } from '@angular/core';
import { TopMenu, ImageSlider, Channel } from 'src/app/shared/components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.less']
})
export class HomeContainerComponent implements OnInit {

  constructor(private router: Router) { }

  menus: TopMenu[] = [ 
    {id: 1, title: '热门', link: 'hot'},
    {id: 2, title: '男装', link: 'men'},
    {id: 3, title: '女装', link: 'women'},
    {id: 4, title: '零食', link: 'food'},
    {id: 5, title: '生鲜', link: 'shenxian'},
    {id: 6, title: '家具', link: 'jiaju'},
    {id: 7, title: '美妆', link: 'meizhuang'},
    {id: 8, title: '运动', link: 'sports'},
    {id: 9, title: '游戏', link: 'game'},
    {id: 10, title: '生活', link: 'life'},
    {id: 11, title: '赤膊', link: 'chibo'},
  ];
  
  
  tabChanged(menu: TopMenu) {
    this.router.navigate(['home', menu.link]);
  }
  
  ngOnInit(): void {
  }

}
