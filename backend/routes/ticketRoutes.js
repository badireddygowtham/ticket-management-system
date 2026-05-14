const express = require("express");
const router = express.Router();
const {
createTicket ,getMyTickets, getAllTickets,assignTicket, updateTicketStatus, getAssignedTickets
} = require("../controllers/ticketController");
const protect = require("../middlewares/authMiddleware");
router.post(
  "/create",
  protect,
  createTicket
);
router.get(
  "/mytickets",
  protect,
  getMyTickets
);
router.get(
  "/all",
  protect,
  getAllTickets
);
router.put(
  "/assign",
  protect,
  assignTicket
);
router.put(
  "/status",
  protect,
  updateTicketStatus
);
router.get(
  "/assigned",
  protect,
  getAssignedTickets
);
module.exports = router;