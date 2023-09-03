import { TestBed } from '@angular/core/testing';

import { FunctionalitiesService } from './functionalities.service';

describe('FunctionalitiesService', () => {
  let service: FunctionalitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunctionalitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
