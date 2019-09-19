import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonTabPage } from './ion-tab.page';

describe('IonTabPage', () => {
  let component: IonTabPage;
  let fixture: ComponentFixture<IonTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonTabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
