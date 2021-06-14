import { TestBed } from '@angular/core/testing';

import { GjDataService } from './gj-data.service';

describe('GjDataService', () => {
  let service: GjDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GjDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
