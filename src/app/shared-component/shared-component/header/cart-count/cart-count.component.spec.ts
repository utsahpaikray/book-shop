import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCountComponent } from './cart-count.component';

describe('CartCountComponent', () => {
  let component: CartCountComponent;
  let fixture: ComponentFixture<CartCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartCountComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
