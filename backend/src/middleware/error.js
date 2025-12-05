// maps zod and general errors to a stable JSON shape
export function errorHandler(err, _req, res, _next) {
  const isZod = err?.issues && Array.isArray(err.issues);
  if (isZod) {
    return res.status(400).json({
      error: "ValidationError",
      details: err.issues.map(i => ({
        path: Array.isArray(i.path) ? i.path.join(".") : String(i.path),
        message: i.message
      }))
    });
  }
  const status = err.status || 500;
  res.status(status).json({ error: err.message || "Internal Server Error" });
}
