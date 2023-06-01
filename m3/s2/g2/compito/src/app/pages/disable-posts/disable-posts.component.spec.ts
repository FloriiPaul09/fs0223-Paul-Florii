import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisablePostsComponent } from './disable-posts.component';

describe('DisablePostsComponent', () => {
  let component: DisablePostsComponent;
  let fixture: ComponentFixture<DisablePostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisablePostsComponent]
    });
    fixture = TestBed.createComponent(DisablePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
