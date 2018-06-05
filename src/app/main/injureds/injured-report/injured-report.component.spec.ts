import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjuredReportComponent } from './injured-report.component';

describe('InjuredReportComponent', () => {
  let component: InjuredReportComponent;
  let fixture: ComponentFixture<InjuredReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjuredReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjuredReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
