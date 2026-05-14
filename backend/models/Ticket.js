const mongoose = require("mongoose");
const ticketSchema = new mongoose.Schema({
  title: String,
  description: String,
  priority: String,
  status: {
    type: String,
    default: "OPEN"
  },
  requester: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, { timestamps: true });
module.exports = mongoose.model("Ticket", ticketSchema);