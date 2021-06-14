import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GjForumDetailsComponent } from './gj-forum-details.component';

describe('GjForumDetailsComponent', () => {
  let component: GjForumDetailsComponent;
  let fixture: ComponentFixture<GjForumDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GjForumDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GjForumDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
