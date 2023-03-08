/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OccupationService } from './occupation.service';

describe('Service: Occupation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OccupationService]
    });
  });

  it('should ...', inject([OccupationService], (service: OccupationService) => {
    expect(service).toBeTruthy();
  }));
});
