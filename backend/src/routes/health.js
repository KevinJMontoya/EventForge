import { Router } from "express";
const router = Router();

// Why: quick probe to confirm the API is alive and reachable.
router.get("/ping", (_req, res) => {
  res.status(200).json({ ok: true, service: "api", ts: Date.now() });
});

export default router;
