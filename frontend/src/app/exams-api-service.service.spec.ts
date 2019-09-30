import { TestBed } from '@angular/core/testing';

import { ExamsApiServiceService } from './exams-api-service.service';

describe('ExamsApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExamsApiServiceService = TestBed.get(ExamsApiServiceService);
    expect(service).toBeTruthy();
  });
});
