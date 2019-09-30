import { TestBed } from '@angular/core/testing';

import { ExamsApiService } from './exams-api.service';

describe('ExamsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExamsApiService = TestBed.get(ExamsApiService);
    expect(service).toBeTruthy();
  });
});
