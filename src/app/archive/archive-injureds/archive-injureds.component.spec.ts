import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveInjuredsComponent } from './archive-injureds.component';

describe('ArchiveInjuredsComponent', () => {
  let component: ArchiveInjuredsComponent;
  let fixture: ComponentFixture<ArchiveInjuredsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveInjuredsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveInjuredsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
