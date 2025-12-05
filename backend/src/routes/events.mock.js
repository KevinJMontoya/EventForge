import { Router } from "express";
import fs from "fs/promises";  
import path from "path";

const router = Router();
const eventsFilePath = path.resolve("backend/data/events.json");

//GET /api/events (Fetch all events)
router.get("/", async (_req, res) => {
  try {
    const data = await fs.readFile(eventsFilePath, "utf8");
    const events = JSON.parse(data);
    res.json({ data: events });
  } catch (err) {
    res.status(500).json({ error: "Failed to read events data", details: err.message });
  }
});

// POST /api/events (Create a new event)
router.post("/", async (req, res) => {
  const { title, date, price } = req.body;

  // Validate input
  if (!title || !date || !price) {
    return res.status(400).json({ error: "Missing required fields (title, date, price)" });
  }

  if (isNaN(price) || price <= 0) {
    return res.status(400).json({ error: "Price must be a positive number" });
  }

  const newEvent = { id: Date.now(), title, date, price };

  try {
    const data = await fs.readFile(eventsFilePath, "utf8");
    const events = JSON.parse(data);
    events.push(newEvent);


    await fs.writeFile(eventsFilePath, JSON.stringify(events, null, 2));

    // Respond with the newly created event
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(500).json({ error: "Failed to read/write events data", details: err.message });
  }
});

export default router;
