import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HindiPage } from './hindi.page';

describe('HindiPage', () => {
  let component: HindiPage;
  let fixture: ComponentFixture<HindiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HindiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HindiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
