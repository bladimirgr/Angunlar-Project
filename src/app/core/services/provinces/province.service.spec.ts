/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProvincesService } from './province.service';

describe('Service: Countries', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProvincesService]
    });
  });

  it('should ...', inject([ProvincesService], (service: ProvincesService) => {
    expect(service).toBeTruthy();
  }));
});
