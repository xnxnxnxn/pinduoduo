import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

export interface TopMenu {
  id: number;
  title: string;
  link: string;
}


@Component({
  selector: 'app-app-scrollable-tab',
  templateUrl: './app-scrollable-tab.component.html',
  styleUrls: ['./app-scrollable-tab.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AppScrollableTabComponent implements OnInit {

  @Input()
  menus: TopMenu[] = [];
  @Output()
  tabSelectChanged = new EventEmitter<TopMenu>();

  selectIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  handleTabSelect(index: number) {
    this.selectIndex = index;
    this.tabSelectChanged.emit(this.menus[index]);
  }


}
