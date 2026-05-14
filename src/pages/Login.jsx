import { useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../services/api";
function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
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
      const response = await API.post(
        "/auth/login",
        formData
      );
      localStorage.setItem(
        "token",
        response.data.token
      );
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );
      const role = response.data.user.role;
      if (role === "admin") {
        navigate("/admin");
      }
      else if (role === "team") {
        navigate("/team");
      }
      else {
        navigate("/requester");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <div className="form-container">
      <h1>Login</h1>
      <form
        className="form"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
        />
        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
export default Login;