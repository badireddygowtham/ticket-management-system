function TicketTable() {
  const tickets = [
    {
      id: 101,
      title: "Login Issue",
      status: "OPEN"
    },
    {
      id: 102,
      title: "Bug Fix",
      status: "COMPLETED"
    }
  ];
  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {
          tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.title}</td>
              <td>{ticket.status}</td>
            </tr>
          ))
        }
      </tbody>

    </table>
  );
}
export default TicketTable;