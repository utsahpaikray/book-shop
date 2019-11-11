import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnniversaryPage } from './anniversary.page';

describe('AnniversaryPage', () => {
  let component: AnniversaryPage;
  let fixture: ComponentFixture<AnniversaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnniversaryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnniversaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
