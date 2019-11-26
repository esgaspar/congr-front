import { TestBed } from '@angular/core/testing';

import { Error.InterceptorService } from './error.interceptor.service';

describe('Error.InterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Error.InterceptorService = TestBed.get(Error.InterceptorService);
    expect(service).toBeTruthy();
  });
});
