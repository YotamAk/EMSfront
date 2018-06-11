import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInjuredComponent } from './edit-injured.component';

describe('EditInjuredComponent', () => {
  let component: EditInjuredComponent;
  let fixture: ComponentFixture<EditInjuredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInjuredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInjuredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
