import { TestBed } from '@angular/core/testing';

import { ValidateISBNService } from './isbn-validate.service';

describe('IsbnValidateService', () => {
  let service: ValidateISBNService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidateISBNService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
