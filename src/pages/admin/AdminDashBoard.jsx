import { useEffect, useState } from "react";
import API from "../../services/api";
function AdminDashBoard() {
  const [tickets, setTickets] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  useEffect(() => {
    fetchTickets();
    fetchTeamMembers();
  }, []);
  const fetchTickets = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await API.get(
        "/tickets/all",
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
  const fetchTeamMembers = async () => {
    try {
      const response = await API.get(
        "/auth/team-members"
      );
      setTeamMembers(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const assignTicket = async (
    ticketId,
    assignedTo
  ) => {
    try {
      const token = localStorage.getItem("token");
      const response = await API.put(
        "/tickets/assign",
        {
          ticketId,
          assignedTo
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      alert(response.data.message);
      fetchTickets();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Assign</th>
          </tr>
        </thead>
        <tbody>
          {
            tickets.map((ticket) => (
              <tr key={ticket._id}>
                <td>{ticket.title}</td>
                <td>{ticket.status}</td>
                <td>{ticket.priority}</td>
                <td>
                  <select
                    onChange={(e) =>
                      assignTicket(
                        ticket._id,
                        e.target.value
                      )
                    }
                  >
                    <option>
                      Assign Team Member
                    </option>
                    {
                      teamMembers.map((member) => (
                        <option
                          key={member._id}
                          value={member._id}
                        >
                          {member.name}
                        </option>
                      ))
                    }
                  </select>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
export default AdminDashBoard;