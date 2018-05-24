import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjuredsComponent } from './injureds.component';

describe('InjuredsComponent', () => {
  let component: InjuredsComponent;
  let fixture: ComponentFixture<InjuredsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjuredsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjuredsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
