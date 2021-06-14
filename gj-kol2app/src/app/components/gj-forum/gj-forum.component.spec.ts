import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GjForumComponent } from './gj-forum.component';

describe('GjForumComponent', () => {
  let component: GjForumComponent;
  let fixture: ComponentFixture<GjForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GjForumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GjForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
