import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini SDK with User-Agent header for telemetry as instructed
const geminiApiKey = process.env.GEMINI_API_KEY || "AIzaSyCLKX2tohQTHF9Gk06XqqlT-tXUjVSOYBU"; // Fallback to provided key
const ai = new GoogleGenAI({
  apiKey: geminiApiKey,
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

// AI Chatbot Route
app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body; // Array of { role: 'user' | 'model', text: string }

    if (!messages || !Array.isArray(messages)) {
      res.status(400).json({ error: "Invalid messages format." });
      return;
    }

    // Map message list to Gemini context structure
    // Role mapping: 'user' -> 'user', 'assistant'/'bot'/'model' -> 'model'
    const contents = messages.map((msg) => {
      const role = msg.role === "user" ? "user" : "model";
      return {
        role,
        parts: [{ text: msg.text }],
      };
    });

    const systemInstruction = `
      You are an AI Helper for Fancy Medlogistic LLC, a premier medical logistics and secure transportation company based in Marrero, Louisiana.
      
      Company Information:
      - Name: Fancy Medlogistic LLC
      - Location: Marrero, Louisiana (Serving clinics, hospitals, pharmacies, laboratories, and providers across southern Louisiana)
      - Phone: (504) 473-5260
      - Email: treshawndawson410@gmail.com
      - Hours: 24/7/365 Available for critical response and scheduled routes.
      
      Services:
      1. Medical Courier Services: Safe transport of blood, specimens, medical records, and diagnostics.
      2. Healthcare Supply Transportation: Distribution of clinical equipment, PPE, and sterilized instruments.
      3. Time-Critical Deliveries: STAT/emergency delivery for operating rooms, emergency departments, or urgent pharmacy needs.
      4. Specimen and Laboratory Transport: Temperature-controlled conditions (frozen, refrigerated, ambient) for medical testing, maintaining chain of custody.
      5. Pharmaceutical Deliveries: Secure transportation of oncology drugs, routine prescriptions, and controlled medical supplies to facilities and residences.
      6. Scheduled Medical Logistics Routes: Reliable daily/weekly inter-office mail, laundry, and bulk clinical supplies loops.
      7. Specialized Healthcare Logistics Solutions: Handling of hazard-labeled cargo, sensitive medical devices, or specialized setup.
      
      Guidelines:
      - Style: High professional stance, trustworthy, safe, responsive, empathetic, and healthcare-compliant.
      - HIPAA Compliant: NEVER ask the user to share private Patient Health Information (PHI) such as Patient Names, SSNs, or specific medical conditions. If they do, politely remind them that Fancy Medlogistic protects patient privacy and suggest they contact the office directly at (504) 473-5260 for sensitive business queries.
      - Quote Requests: If the user wants a quote, answer questions and invite them to fill out the "Request a Quote" form on the page or call the dispatch team directly at (504) 473-5260.
      - Keep responses helpful, concise, and structured.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    const replyText = response.text || "I apologize, but I could not formulate a response at this time. Please call our team at (504) 473-5260.";
    res.json({ reply: replyText });
  } catch (error: any) {
    console.error("Error communicating with Gemini on server:", error);
    res.status(500).json({
      error: "Failed to communicate with the medical logistics assistant.",
      details: error.message,
    });
  }
});

// Vite setup or Static asset serving
const startServer = async () => {
  if (process.env.NODE_ENV !== "production") {
    // Dynamic import to avoid loading Vite in production bundle
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Fancy Medlogistic Server running on http://localhost:${PORT}`);
  });
};

startServer();
