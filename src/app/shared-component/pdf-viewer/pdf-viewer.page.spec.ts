import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfViewerPage } from './pdf-viewer.page';

describe('PdfViewerPage', () => {
  let component: PdfViewerPage;
  let fixture: ComponentFixture<PdfViewerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfViewerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfViewerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
