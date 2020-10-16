import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleDiOffComponent } from './toggle-di-off.component';

describe('ToggleDiOffComponent', () => {
  let component: ToggleDiOffComponent;
  let fixture: ComponentFixture<ToggleDiOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleDiOffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleDiOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
