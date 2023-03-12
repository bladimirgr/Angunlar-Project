export interface OccupationRequest {
    name: string;
}

export interface OccupationResponse {
    id:   number;
    name: string;
}

export interface OccupationDataResponse {
    data:   OccupationResponse;
}
