import { TestBed } from '@angular/core/testing';

import { SummaUiService } from './summa-ui.service';

describe('SummaUiService', () => {
  let service: SummaUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SummaUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
