import { TestBed } from '@angular/core/testing';

import { EmailbackendService } from './emailbackend.service';

describe('EmailbackendService', () => {
  let service: EmailbackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailbackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
