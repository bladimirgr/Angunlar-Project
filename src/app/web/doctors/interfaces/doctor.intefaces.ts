export interface DoctorRequest {
    userId:        string;
    firstName:     string;
    lastName:      string;
    insurance:     string;
    sex:           number;
    maritalStatus: string;
    birthday:      string;
    nationalityId: number;
    specialtyId:   number;
    status:        string;
    isActive:      boolean;
    createdAt:     string;
    updatedAt:     string;
    createdBy:     string;
    updatedBy:     string;
    documents:     Document[];
    phones:        Phone[];
    addresses:     Address[];
    emails:        Email[];
}

export interface DoctorResponse {
    id:            number;
    userId:        string;
    firstName:     string;
    lastName:      string;
    insurance:     string;
    sex:           number;
    maritalStatus: string;
    birthday:      string;
    nationalityId: number;
    specialtyId:   number;
    status:        string;
    isActive:      boolean;
    createdAt:     string;
    updatedAt:     string;
    createdBy:     string;
    updatedBy:     string;
    documents:     Document[];
    phones:        Phone[];
    addresses:     Address[];
    emails:        Email[];
}

export interface Address {
    addressType:  number;
    street:       string;
    neighborhood: string;
    city:         string;
}

export interface Document {
    documentType: number;
    number:       string;
}

export interface Email {
    emailType: number;
    email:     string;
}

export interface Phone {
    phoneType: number;
    number:    string;
    extension: string;
}
