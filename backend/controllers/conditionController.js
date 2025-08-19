import db from "../config/db.js";
// checkSymptoms.js
export const checkSymptoms = async (req, res) => {
  try {
    let { symptoms } = req.body;

    // Ensure symptoms is always an array
    if (!Array.isArray(symptoms)) {
      // if frontend sends comma-separated string
      if (typeof symptoms === "string") {
        symptoms = symptoms.split(",").map(s => s.trim());
      } else {
        return res.status(400).json({ error: "Symptoms must be an array or string" });
      }
    }

    const [rows] = await db.query(
      "SELECT * FROM conditions WHERE symptom IN (?)",
      [symptoms]
    );

    res.json(rows);
  } catch (err) {
    console.error("Error checking symptoms:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
