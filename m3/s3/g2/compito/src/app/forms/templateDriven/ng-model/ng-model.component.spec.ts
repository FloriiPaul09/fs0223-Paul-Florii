import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModelComponent } from './ng-model.component';

describe('NgModelComponent', () => {
  let component: NgModelComponent;
  let fixture: ComponentFixture<NgModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgModelComponent]
    });
    fixture = TestBed.createComponent(NgModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
