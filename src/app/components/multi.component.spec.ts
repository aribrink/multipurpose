import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiComponent } from './multi.component';

describe('MultiComponent', () => {
  let component: MultiComponent;
  let fixture: ComponentFixture<MultiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiComponent]
    });
    fixture = TestBed.createComponent(MultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
