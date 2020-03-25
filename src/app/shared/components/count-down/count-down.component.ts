import { Component, OnInit, Input } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, takeWhile, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.less']
})
export class CountDownComponent implements OnInit {
  @Input()
  startDate: Date = new Date();
  @Input()
  endDate: Date  = new Date();

  countDown$: Observable<any>;
  finish = false;

  constructor() { }

  ngOnInit(): void {
    this.countDown$ = this.getCountDownObservable(this.startDate, this.endDate);
  }
  getCountDownObservable(startDate: Date, endDate: Date) {
    this.finish = false;
    // 得到两个时间之间的秒数
    const diffSec = this.diffInSec(startDate, endDate);
    console.log(diffSec);
    return interval(1000).pipe(
        map(elapse => diffSec - elapse),
        takeWhile(diff => diff >= 0),
        tap(diff => this.finish = diff === 0),
        map(sec => ({
          day: Math.floor(sec / 3600 / 24),
          hour: Math.floor((sec / 3600) % 24),
          minute: Math.floor((sec / 60) % 60),
          second: Math.floor(sec % 60)
        })),
        map(({hour, minute, second}) => `${hour}:${minute}:${second}`)
    );
  }

  // 返回两个时间的秒数
  private diffInSec = (start: Date, end: Date): number => {
      const diff = end.getTime() - start.getTime();
      return Math.floor(diff / 1000);
  }

}
