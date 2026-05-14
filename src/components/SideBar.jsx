import { Link } from "react-router-dom";
function SideBar() {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li><Link to="/admin">Admin</Link></li>
        <li><Link to="/requester">Requester</Link></li>
        <li><Link to="/team">Team</Link></li>
      </ul>
    </div>
  );
}
export default SideBar;