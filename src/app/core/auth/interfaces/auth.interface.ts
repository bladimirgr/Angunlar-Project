export interface AuthResponse {
    id?: string;
    username?: string;
    email?: string;
    roles?: string;
    jwToken?: string;
}

export interface AuthRequest {
    username?: string;
    email?: string;
    roles?: string;
    jwToken?: string;
}


export interface AuthDataResponse {
    data: AuthResponse[];
}
