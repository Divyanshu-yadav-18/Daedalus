import jwt from 'jsonwebtoken';
import { UserPayload } from '../types/auth.types';

export const generateToken = (payLoad: UserPayload): string => {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET is not defined in environment variables');
    }
    return jwt.sign(
        payLoad,
        secret,
        { 
            expiresIn: '1d' 
        }
    );
};

export const verifyToken = (token: string) => {
    const  secret = process.env.JWT_SECRET  as string;
    try {
        return jwt.verify(token, secret) as UserPayload;
    } catch (error) {
        return null;
    }
}