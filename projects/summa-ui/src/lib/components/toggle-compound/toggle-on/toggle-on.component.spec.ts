import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleOnComponent } from './toggle-on.component';

describe('ToggleOnComponent', () => {
  let component: ToggleOnComponent;
  let fixture: ComponentFixture<ToggleOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleOnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
