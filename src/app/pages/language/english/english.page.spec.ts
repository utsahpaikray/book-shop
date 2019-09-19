import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishPage } from './english.page';

describe('EnglishPage', () => {
  let component: EnglishPage;
  let fixture: ComponentFixture<EnglishPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnglishPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
