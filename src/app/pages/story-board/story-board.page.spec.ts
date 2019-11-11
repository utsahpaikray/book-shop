import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryBoardPage } from './story-board.page';

describe('StoryBoardPage', () => {
  let component: StoryBoardPage;
  let fixture: ComponentFixture<StoryBoardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryBoardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryBoardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
