import { useEffect, useState } from "react";
import API from "../../services/api";
import TicketCard from "../../components/TicketCard";
function MyTickets() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
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
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>My Tickets</h1>
      {
        tickets.map((ticket) => (
          <TicketCard
            key={ticket._id}
            ticket={ticket}
          />
        ))
      }
    </div>
  );
}
export default MyTickets;