import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoViewerPage } from './video-viewer.page';

describe('VideoViewerPage', () => {
  let component: VideoViewerPage;
  let fixture: ComponentFixture<VideoViewerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoViewerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoViewerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
