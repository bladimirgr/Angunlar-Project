export interface MedicalRecordRequest {
    patientId:      number;
    patientName:    string;
    reason:         string;
    description:    string;
    service:        string;
    symptons:       string[];
    dignostics:     string;
    status:         string
    isActive:       boolean
    createdAt:      string
    updatedAt:      string
    createdBy:      string
    updatedBy:      string
}


export interface MedicalRecordResponse {
    id:             number;
    patientId:      number;
    patientName:    string;
    reason:         string;
    description:    string;
    service:        string;
    symptons:       string[];
    dignostics:     string;
    status:         string
    isActive:       boolean
    createdAt:      string
    updatedAt:      string
    createdBy:      string
    updatedBy:      string
}

export interface MedicalRecordDataResponse {
    data:       MedicalRecordResponse [];
}

