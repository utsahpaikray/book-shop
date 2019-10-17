import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRentServicesPage } from './car-rent-services.page';

describe('CarRentServicesPage', () => {
  let component: CarRentServicesPage;
  let fixture: ComponentFixture<CarRentServicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarRentServicesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarRentServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
