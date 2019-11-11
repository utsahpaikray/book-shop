import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComboPage } from './detail-combo.page';

describe('DetailComboPage', () => {
  let component: DetailComboPage;
  let fixture: ComponentFixture<DetailComboPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailComboPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComboPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
