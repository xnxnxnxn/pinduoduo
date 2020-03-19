import { Component, OnInit } from '@angular/core';
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
  styleUrls: ['./horizontal-grid.component.less']
})
export class HorizontalGridComponent implements OnInit {
 
   
  channels: Channel[] = [
    // tslint:disable-next-line: max-line-length
    {id:1, title:'商城首页', link: '', icon: '../../../../assets/icon/alipay.png'},
    // tslint:disable-next-line: max-line-leng../../../../assets/icon/alipay.pngth 
    {id:2, title:'商城首页', link: '', icon: '../../../../assets/icon/alipay.png'},
    // tslint:disable-next-line: max-line-leng../../../../assets/icon/alipay.pngth
    {id:3, title:'商城首页', link: '', icon: '../../../../assets/icon/alipay.png'},
    // tslint:disable-next-line: max-line-leng../../../../assets/icon/alipay.pngth
    {id:4, title:'商城首页', link: '', icon: '../../../../assets/icon/alipay.png'},
    // tslint:disable-next-line: max-line-leng../../../../assets/icon/alipay.pngth
    {id:5, title:'商城首页', link: '', icon: '../../../../assets/icon/alipay.png'},
    // tslint:disable-next-line: max-line-leng../../../../assets/icon/alipay.pngth
    {id:6, title:'商城首页', link: '', icon: '../../../../assets/icon/alipay.png'},
    // tslint:disable-next-line: max-line-leng../../../../assets/icon/alipay.pngth
    {id:7, title:'商城首页', link: '', icon: '../../../../assets/icon/alipay.png'},
    // tslint:disable-next-line: max-line-leng../../../../assets/icon/alipay.pngth
    {id:8, title:'商城首页', link: '', icon: '../../../../assets/icon/alipay.png'},
  ]

 

  constructor() { }

  ngOnInit(): void {
  }

}
