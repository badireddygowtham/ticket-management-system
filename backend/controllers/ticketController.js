const Ticket = require("../models/Ticket");
const createTicket = async (req, res) => {
  try {
    const {
      title,
      description,
      priority
    } = req.body;
    const ticket = await Ticket.create({
      title,
      description,
      priority,
      requester: req.user.id
    });
    res.status(201).json({
      message: "Ticket Created",
      ticket
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
// get my tickets only
const getMyTickets = async (req, res) => {
try {
    const tickets = await Ticket.find({
      requester: req.user.id
    });
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
// get all tickets
const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find()
      .populate("requester", "name email")
      .populate("assignedTo", "name email");
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
//Assign Ticket Api
const assignTicket = async (req, res) => {
  try {
    const { ticketId, assignedTo } = req.body;
    const ticket = await Ticket.findById(ticketId);
    if (!ticket) {
      return res.status(404).json({
        message: "Ticket not found"
      });
    }
    ticket.assignedTo = assignedTo;
    await ticket.save();
    res.status(200).json({
      message: "Ticket Assigned Successfully",
      ticket
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
// status update api
const updateTicketStatus = async (req, res) => {
  try {
    const { ticketId, status } = req.body;
    const ticket = await Ticket.findById(ticketId);
    if (!ticket) {
      return res.status(404).json({
        message: "Ticket not found"
      });
    }
    ticket.status = status;
    await ticket.save();
    res.status(200).json({
      message: "Ticket Status Updated",
      ticket
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
// get assigned tickets api 
const getAssignedTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({
      assignedTo: req.user.id
    })
    .populate("requester", "name email");
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
module.exports = {
  createTicket,
  getMyTickets,
  getAllTickets ,
  assignTicket ,
  updateTicketStatus,
  getAssignedTickets
};