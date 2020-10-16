import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleDiButtonComponent } from './toggle-di-button.component';

describe('ToggleDiButtonComponent', () => {
  let component: ToggleDiButtonComponent;
  let fixture: ComponentFixture<ToggleDiButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleDiButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleDiButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
