export interface ServicesRequest {
    name: string;
}

export interface ServicesResponse {
    id:   number;
    name: string;
}

export interface ServicesDataResponse {
    data:   ServicesResponse;
}
