export interface SymptomsRequest {
    name: string
}

export interface SymptomsResponse {
    id: number,
    name: string
}

export interface SymptomsDataResponse {
    data: SymptomsResponse
}