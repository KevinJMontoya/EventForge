import { verifyToken } from "../utils/jwt.js";  
import { findById } from "../data/users.memory.js";  


export function requireAuth(req, res, next) {
  const hdr = req.headers.authorization || "";  
  const [, token] = hdr.split(" ");  

  if (!token) return res.status(401).json({ error: "Missing bearer token" });
  
  try {
    // Verify the token and decode user information
    const decoded = verifyToken(token); // { sub, email, role }
    
    const user = findById(decoded.sub);

    if (!user) return res.status(401).json({ error: "User not found" });
    
    req.user = { id: user.id, email: user.email, role: user.role };
    

    next();
  } catch {
  
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}

// Ccheck if the user has the required role(s)
export function requireRole(...roles) {
  return (req, _res, next) => {

    if (!req.user || !roles.includes(req.user.role)) {
      return next(Object.assign(new Error("Forbidden"), { status: 403 }));
    }

    next();
  };
}
