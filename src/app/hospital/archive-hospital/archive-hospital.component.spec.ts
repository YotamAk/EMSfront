import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveHospitalComponent } from './archive-hospital.component';

describe('ArchiveHospitalComponent', () => {
  let component: ArchiveHospitalComponent;
  let fixture: ComponentFixture<ArchiveHospitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveHospitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
