import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleCompoundComponent } from './toggle-compound.component';

describe('ToggleCompoundComponent', () => {
  let component: ToggleCompoundComponent;
  let fixture: ComponentFixture<ToggleCompoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleCompoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleCompoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
