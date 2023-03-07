export interface AppointmentRequest {
    record:      string;
    service:     string;
    patientId:   number;
    patientName: string;
    doctorId:    number;
    status:      string;
    isActive:    boolean;
    createdAt:   string;
    updatedAt:   string;
    createdBy:   string;
    updatedBy:   string;
}

export interface AppointmentResponse {
    id:          number;
    record:      string;
    service:     string;
    patientId:   number;
    patientName: string;
    doctorId:    number;
    status:      string;
    isActive:    boolean;
    createdAt:   string;
    updatedAt:   string;
    createdBy:   string;
    updatedBy:   string;
}

export interface AppointmentDataResponse {
    data:  AppointmentResponse[];
}
