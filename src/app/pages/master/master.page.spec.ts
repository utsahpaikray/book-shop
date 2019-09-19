import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPage } from './master.page';

describe('MasterPage', () => {
  let component: MasterPage;
  let fixture: ComponentFixture<MasterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
