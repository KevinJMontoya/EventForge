import { Router } from "express";
import { z } from "zod";
import { users, findByEmail, insertUser, nextId } from "../data/users.memory.js";
import { hashPassword, comparePassword } from "../utils/password.js";
import { signToken } from "../utils/jwt.js";
import { requireAuth } from "../middleware/requireAuth.js";

const router = Router();

const regSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(["ADMIN","ORGANIZER","GUEST"]).default("GUEST")
});

router.post("/register", async (req, res, next) => {
  try {
    const { email, password, role } = regSchema.parse(req.body);
    if (findByEmail(email)) return res.status(409).json({ error: "Email already exists" });
    const passwordHash = await hashPassword(password);
    const user = insertUser({ id: nextId(), email, passwordHash, role });
    const token = signToken({ sub: user.id, email: user.email, role: user.role });
    res.status(201).json({ data: { id: user.id, email, role, token } });
  } catch (e) { next(e); }
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string()
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = loginSchema.parse(req.body);
    const user = findByEmail(email);
    if (!user) return res.status(401).json({ error: "Invalid credentials" });
    const ok = await comparePassword(password, user.passwordHash);
    if (!ok) return res.status(401).json({ error: "Invalid credentials" });
    const token = signToken({ sub: user.id, email: user.email, role: user.role });
    res.json({ data: { id: user.id, email: user.email, role: user.role, token } });
  } catch (e) { next(e); }
});

router.get("/me", requireAuth, (req, res) => {
  res.json({ data: req.user });
});

export default router;
