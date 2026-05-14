import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../services/api";
import TicketCard from "../../components/TicketCard";
function RequesterDashBoard() {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    fetchTickets();
  }, []);
  const fetchTickets = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await API.get(
        "/tickets/mytickets",
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
  return (
    <div>
      <h1>Requester Dashboard</h1>
      <Link to="/create-ticket">
        <button>
          Create Ticket
        </button>
      </Link>
      {
        tickets.length === 0 ? (
          <h3>No Tickets Found</h3>
        ) : (
          tickets.map((ticket) => (
            <TicketCard
              key={ticket._id}
              ticket={ticket}
            />
          ))
        )
      }
    </div>
  );
}
export default RequesterDashBoard;