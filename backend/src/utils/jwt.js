import jwt from "jsonwebtoken";
const { JWT_SECRET = "dev", TOKEN_TTL = "1d" } = process.env;

export function signToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: TOKEN_TTL });
}
export function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}
