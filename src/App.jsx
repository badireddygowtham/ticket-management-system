import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";

import AdminDashBoard from "./pages/admin/AdminDashBoard";

import RequesterDashBoard from "./pages/requester/RequesterDashBoard";
import CreateTicket from "./pages/requester/CreateTicket";
import MyTickets from "./pages/requester/MyTickets";

import TeamDashBoard from "./pages/team/TeamDashBoard";
import AssignedTickets from "./pages/team/AssignedTickets";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminDashBoard />} />
        <Route path="/requester" element={<RequesterDashBoard />} />
        <Route path="/create-ticket" element={<CreateTicket />} />
        <Route path="/my-tickets" element={<MyTickets />} />
        <Route path="/team" element={<TeamDashBoard />} />
        <Route path="/assigned-tickets" element={<AssignedTickets />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;