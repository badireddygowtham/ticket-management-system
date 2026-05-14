import { Link } from "react-router-dom";
function NavBar() {
  const user = JSON.parse(
    localStorage.getItem("user")
  );
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Ticket Management</h2>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="auth-buttons">
        {
          user ? (
            <>
              <p>
  {user.name} ({user.role})
</p>
              <button onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button>Login</button>
              </Link>
              <Link to="/register">
                <button>Register</button>
              </Link>
            </>
          )
        }
      </div>
    </nav>
  );
}
export default NavBar;