function TicketCard({ ticket }) {
  return (
    <div className="ticket-card">
      <h3>Ticket #{ticket.id}</h3>
      <h2>{ticket.title}</h2>
      <p>
        <strong>Priority:</strong> {ticket.priority}
      </p>
      <p
  style={{
    color: getStatusColor(ticket.status)
  }}
>
  Status: {ticket.status}
</p>
    </div>
  );
}
const getStatusColor = (status) => {
  if (status === "OPEN") {
    return "red";
  }
  else if (status === "IN_PROGRESS") {
    return "orange";
  }
  else if (status === "COMPLETED") {
    return "green";
  }
  else {
    return "gray";
  }
};
export default TicketCard;