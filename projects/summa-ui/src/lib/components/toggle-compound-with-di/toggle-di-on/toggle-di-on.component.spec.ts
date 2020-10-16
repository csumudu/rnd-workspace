import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleDiOnComponent } from './toggle-di-on.component';

describe('ToggleDiOnComponent', () => {
  let component: ToggleDiOnComponent;
  let fixture: ComponentFixture<ToggleDiOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleDiOnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleDiOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
