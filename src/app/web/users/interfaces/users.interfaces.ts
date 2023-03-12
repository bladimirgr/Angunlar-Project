export interface UsersRequest {
    username:  string;
    email:     string;
    password:  string;
    isActive:  boolean;
    roles:     string;
    img:       any
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
    img:       any
    createdAt: string;
    updatedAt: string;
}

export interface UsersDataResponse {
    data:        UsersResponse [];
}


