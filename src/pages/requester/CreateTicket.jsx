import { useState } from "react";
import API from "../../services/api";
function CreateTicket() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: ""
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await API.post(
        "/tickets/create",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <div className="form-container">
      <h1>Create Ticket</h1>
      <form
        className="form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="title"
          placeholder="Ticket Title"
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />
        <select
          name="priority"
          onChange={handleChange}
        >
          <option value="">Select Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button type="submit">
          Create Ticket
        </button>
      </form>
    </div>
  );
}
export default CreateTicket;