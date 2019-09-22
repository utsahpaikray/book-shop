import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySchoolListPage } from './my-school-list.page';

describe('MySchoolListPage', () => {
  let component: MySchoolListPage;
  let fixture: ComponentFixture<MySchoolListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySchoolListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySchoolListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
