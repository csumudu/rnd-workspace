import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenteringComponent } from './centering.component';

describe('CenteringComponent', () => {
  let component: CenteringComponent;
  let fixture: ComponentFixture<CenteringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenteringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
