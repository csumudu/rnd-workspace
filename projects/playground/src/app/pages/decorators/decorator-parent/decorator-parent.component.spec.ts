import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratorParentComponent } from './decorator-parent.component';

describe('DecoratorParentComponent', () => {
  let component: DecoratorParentComponent;
  let fixture: ComponentFixture<DecoratorParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecoratorParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoratorParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
