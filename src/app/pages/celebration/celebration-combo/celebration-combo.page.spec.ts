import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebrationComboPage } from './celebration-combo.page';

describe('CelebrationComboPage', () => {
  let component: CelebrationComboPage;
  let fixture: ComponentFixture<CelebrationComboPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelebrationComboPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebrationComboPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
