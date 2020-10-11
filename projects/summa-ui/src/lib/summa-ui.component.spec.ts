import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaUiComponent } from './summa-ui.component';

describe('SummaUiComponent', () => {
  let component: SummaUiComponent;
  let fixture: ComponentFixture<SummaUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
