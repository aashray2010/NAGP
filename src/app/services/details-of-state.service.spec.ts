import { TestBed } from '@angular/core/testing';

import { DetailsOfStateService } from './details-of-state.service';

describe('DetailsOfStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailsOfStateService = TestBed.get(DetailsOfStateService);
    expect(service).toBeTruthy();
  });
});
