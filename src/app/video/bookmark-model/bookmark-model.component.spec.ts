import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkModelComponent } from './bookmark-model.component';

describe('BookmarkModelComponent', () => {
  let component: BookmarkModelComponent;
  let fixture: ComponentFixture<BookmarkModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
