export interface UserPayload {
    userId: string | number;
    role: 'user' | 'admin' | 'artist';
}

export interface LoginInput {
    email: string;
    password: string;
}

export interface SignUpInput extends LoginInput {
    name: string;
}