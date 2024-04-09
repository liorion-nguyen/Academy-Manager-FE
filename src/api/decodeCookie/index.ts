import jwt from 'jsonwebtoken';
export const verifyToken = (token: string) => {
  try {
    console.log("token: ", token);
    
    const decoded = jwt.verify(token, 'duy');
    console.log("decoded: ", decoded);
    return decoded;
  } catch (error) {
    console.error('Invalid token:', error);
    return null;
  }
};
