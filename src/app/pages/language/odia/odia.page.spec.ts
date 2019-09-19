import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdiaPage } from './odia.page';

describe('OdiaPage', () => {
  let component: OdiaPage;
  let fixture: ComponentFixture<OdiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdiaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
