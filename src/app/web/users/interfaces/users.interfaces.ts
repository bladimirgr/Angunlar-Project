export interface UsersRequest {
    username:  string;
    email:     string;
    password:  string;
    isActive:  boolean;
    roles:     string;
    createdAt: string;
    updatedAt: string;
}

export interface UsersResponse {
    id:        string;
    username:  string;
    email:     string;
    password:  string;
    isActive:  boolean;
    roles:     string;
    createdAt: string;
    updatedAt: string;
}

export interface UsersDataResponse {
    data:        UsersResponse [];
}


