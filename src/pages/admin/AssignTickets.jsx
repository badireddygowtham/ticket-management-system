import { useEffect, useState } from "react";
import API from "../../services/api";
function AssignedTickets() {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    fetchAssignedTickets();
  }, []);
  const fetchAssignedTickets = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await API.get(
        "/tickets/assigned",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      setTickets(response.data);
    } catch (error) {
      console.log(error);
    }
  };
const updateStatus = async (
  ticketId,
  status
) => {
  try {
    const token = localStorage.getItem("token");
    const response = await API.put(
      "/tickets/status",
      {
        ticketId,
        status
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    alert(response.data.message);
    fetchAssignedTickets();
  } catch (error) {
    console.log(error);
  }
};
  return (
    <div>
      <h1>Assigned Tickets</h1>
{
  tickets.map((ticket) => (
    <div
      key={ticket._id}
      className="ticket-card"
    >
      <h3>{ticket.title}</h3>
      <p>{ticket.description}</p>
      <p>Status: {ticket.status}</p>
      <select
        onChange={(e) =>
          updateStatus(
            ticket._id,
            e.target.value
          )
        }
      >
        <option>
          Update Status
        </option>
        <option value="OPEN">
          OPEN
        </option>
        <option value="IN_PROGRESS">
          IN_PROGRESS
        </option>
        <option value="COMPLETED">
          COMPLETED
        </option>
        <option value="REJECTED">
          REJECTED
        </option>
      </select>
    </div>
  ))
}
    </div>
  );
}
export default AssignedTickets;