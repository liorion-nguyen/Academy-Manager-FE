import jwt from 'jsonwebtoken';
export const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, 'academy_manager');
    return decoded;
  } catch (error) {
    console.error('Invalid token:', error);
    return null;
  }
};
