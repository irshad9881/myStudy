const mongoose = require("mongoose");

const contactMessageSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  phoneNo: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("ContactMessage", contactMessageSchema);
