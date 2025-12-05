import "dotenv/config";
import express from "express";
import cors from "cors";
import healthRouter from "./routes/health.js";
import authRouter from "./routes/auth.js";
import eventsRouter from "./routes/events.js";
import ordersRouter from "./routes/orders.js";
import { requireAuth } from "./middleware/requireAuth.js";
import { errorHandler } from "./middleware/error.js";

const app = express();

const corsOrigin = process.env.CORS_ORIGIN || "http://localhost:5173";  
app.use(cors({ origin: corsOrigin, credentials: true }));
app.use(express.json());


app.use("/api", healthRouter);
app.use("/api/auth", authRouter);

app.use("/api/events", requireAuth, eventsRouter);
app.use("/api/orders", requireAuth, ordersRouter);

app.get("/api/users/me", requireAuth, (req, res) => res.json({ data: req.user }));

app.use((req, res) => res.status(404).json({ error: "Not Found", path: req.originalUrl }));
app.use(errorHandler);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`API running on http://localhost:${port}`));
