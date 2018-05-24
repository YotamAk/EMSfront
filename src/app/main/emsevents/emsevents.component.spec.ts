import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmseventsComponent } from './emsevents.component';

describe('EmseventsComponent', () => {
  let component: EmseventsComponent;
  let fixture: ComponentFixture<EmseventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmseventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmseventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
