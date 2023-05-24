import { TestBed } from '@angular/core/testing';

import { ProfesionalService } from './profesional.service';

describe('ProfesionalService', () => {
  let service: ProfesionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfesionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
