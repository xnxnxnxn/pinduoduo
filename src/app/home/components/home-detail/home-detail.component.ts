import { Component, OnInit } from '@angular/core';
import { Channel, ImageSlider } from 'src/app/shared/components';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.less']
})
export class HomeDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  imageSliders: ImageSlider[] = [
    {
      // tslint:disable-next-line: max-line-length
      imgUrl: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1584452624&di=368e1cac0d22a072a9b0340099899fca&src=http://ku.90sjimg.com/back_pic/05/08/96/8459812f3c05b43.jpg!/watermark/text/OTDorr7orqE=/font/simkai/align/southeast/opacity/20/size/50',
      link: '' ,
      caption: ''
    },
    {
      // tslint:disable-next-line: max-line-length
      imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584462824646&di=945f604ee1cd042d12b489f68ebf2d45&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F00%2F11%2F04%2F435636e9b087038.jpg',
      link: '' ,
      caption: ''
    },
    {
      // tslint:disable-next-line: max-line-length
      imgUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=179686573,1659965489&fm=26&gp=0.jpg',
      link: '' ,
      caption: ''
    },
    {
      // tslint:disable-next-line: max-line-length
      imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2987675329,2171331638&fm=26&gp=0.jpg',
      link: '' ,
      caption: ''
    },
    {
      // tslint:disable-next-line: max-line-length
      imgUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1235618197,1651519349&fm=26&gp=0.jpg',
      link: '' ,
      caption: ''
    }
  ];

  channels: Channel[] = [
    {id: 1, title: '商城首页', link: '', icon: '../../../../assets/icon/alipay.png'},
    {id: 2, title: '商城首页', link: '', icon: '../../../../assets/icon/alipay.png'},
    {id: 3, title: '商城首页', link: '', icon: '../../../../assets/icon/alipay.png'},
    {id: 4, title: '商城首页', link: '', icon: '../../../../assets/icon/alipay.png'},
    {id: 5, title: '商城首页', link: '', icon: '../../../../assets/icon/alipay.png'},
    {id: 6, title: '商城首页', link: '', icon: '../../../../assets/icon/alipay.png'},
    {id: 7, title: '商城首页', link: '', icon: '../../../../assets/icon/alipay.png'},
    {id: 8, title: '商城首页', link: '', icon: '../../../../assets/icon/alipay.png'},
  ]; 
  
  selectedTabLink = '';
  ngOnInit(): void {
  
    this.route.paramMap.subscribe(params => {
        console.log('路径参数', params);
        this.selectedTabLink = params.get('tabLink');
    })
  }

}
