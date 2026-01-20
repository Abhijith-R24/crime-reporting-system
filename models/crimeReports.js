const mongoose = require("mongoose");
//to create a crime report schema
const CrimeReportSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  crime_type: {
    type: String,
    required: true,
    enum: ["Theft", "Harassment", "Accident", "Cybercrime", "Other"]
  },
  description: {
    type: String,
    required: true
  },
  evidences: [
    {
      file_name: String,
      file_url: String
    }
  ],
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  address: String,
  status: {
    type: String,
    enum: ["Pending", "Under Review", "Resolved"],
    default: "Pending"
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("CrimeReport", CrimeReportSchema);
