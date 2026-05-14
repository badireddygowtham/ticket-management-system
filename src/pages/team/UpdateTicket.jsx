function UpdateTicket() {
  return (
    <div>
      <h1>Update Ticket</h1>
      <select>
        <option>OPEN</option>
        <option>IN_PROGRESS</option>
        <option>ON_HOLD</option>
        <option>COMPLETED</option>
        <option>REJECTED</option>
      </select>
        <button>
        Update Status
      </button>
    </div>
  );
}
export default UpdateTicket;