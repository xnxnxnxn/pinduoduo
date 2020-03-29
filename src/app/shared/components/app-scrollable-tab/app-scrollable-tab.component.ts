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

  @Input() selectedTabLink: string;
  @Input()
  menus: TopMenu[] = [];
  @Output() tabSelected = new EventEmitter();


  selectIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  handleTabSelect(index: number) {
    this.tabSelected.emit(this.menus[index]);
  }


}
