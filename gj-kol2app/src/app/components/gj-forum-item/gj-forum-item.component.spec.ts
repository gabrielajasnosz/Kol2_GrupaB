import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GjForumItemComponent } from './gj-forum-item.component';

describe('GjForumItemComponent', () => {
  let component: GjForumItemComponent;
  let fixture: ComponentFixture<GjForumItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GjForumItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GjForumItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
