import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { OccupationResponse, OccupationRequest, OccupationDataResponse } from '../../../web/common/interfaces/occupations.interfaces';

@Injectable()
export class OccupationService extends BaseService<OccupationResponse, OccupationDataResponse, OccupationRequest> {

    override url = 'http://localhost:3000/occupation'

    constructor(
        private httpClient: HttpClient
    ) { 
        super(httpClient)
    }

}
