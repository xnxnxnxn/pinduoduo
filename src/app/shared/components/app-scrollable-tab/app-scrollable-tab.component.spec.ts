import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppScrollableTabComponent } from './app-scrollable-tab.component';

describe('AppScrollableTabComponent', () => {
  let component: AppScrollableTabComponent;
  let fixture: ComponentFixture<AppScrollableTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppScrollableTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppScrollableTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
