import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextContainerComponent } from './text-container.component';

describe('TextContainerComponent', () => {
  let component: TextContainerComponent;
  let fixture: ComponentFixture<TextContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextContainerComponent]
    });
    fixture = TestBed.createComponent(TextContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
