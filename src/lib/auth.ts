import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { AUTH_COOKIE_NAME } from './constants';

const JWT_SECRET = process.env.JWT_SECRET || 'cc-salon-super-secret-jwt-key-2024';

export interface TokenPayload {
  userId: string;
  role: string;
}

export function signToken(userId: string, role: string): string {
  return jwt.sign({ userId, role }, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token: string): TokenPayload | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as TokenPayload;
    return decoded;
  } catch (error) {
    return null;
  }
}

export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export function getSession(cookies: any): TokenPayload | null {
  const token = cookies.get(AUTH_COOKIE_NAME)?.value;
  if (!token) return null;
  return verifyToken(token);
}

export function requireAuth(cookies: any, requiredRole?: string): TokenPayload {
  const session = getSession(cookies);
  if (!session) {
    throw new Error('Unauthorized');
  }
  
  if (requiredRole && session.role !== requiredRole) {
    throw new Error('Forbidden');
  }
  
  return session;
}
