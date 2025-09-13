import db from "../config/db.js";

// Get doctors by specialization
export const getDoctorsBySpecialization = async (req, res) => {
  const { specialization } = req.params;
  try {
    // Case-insensitive search
    const [rows] = await db.query(
      "SELECT * FROM doctors WHERE LOWER(specialization) = LOWER(?)",
      [specialization]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: `No doctors found for ${specialization}` });
    }

    res.json(rows);
  } catch (err) {
    console.error("getDoctorsBySpecialization error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Get doctor by ID
export const getDoctorById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query("SELECT * FROM doctors WHERE id = ?", [id]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    res.json(rows[0]); // Return one doctor
  } catch (err) {
    console.error("getDoctorById error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
