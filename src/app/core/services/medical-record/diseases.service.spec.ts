/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DiseasesService } from './diseases.service';

describe('Service: Diseases', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiseasesService]
    });
  });

  it('should ...', inject([DiseasesService], (service: DiseasesService) => {
    expect(service).toBeTruthy();
  }));
});
