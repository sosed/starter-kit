import { TestBed, inject } from '@angular/core/testing';

import { DynamicLocaleService } from './dynamic-locale.service';

describe('DynamicLocaleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DynamicLocaleService]
    });
  });

  it('should be created', inject([DynamicLocaleService], (service: DynamicLocaleService) => {
    expect(service).toBeTruthy();
  }));
});
