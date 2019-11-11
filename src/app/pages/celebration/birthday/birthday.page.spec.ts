import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayPage } from './birthday.page';

describe('BirthdayPage', () => {
  let component: BirthdayPage;
  let fixture: ComponentFixture<BirthdayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthdayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
