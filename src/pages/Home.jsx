import NavBar from "../components/NavBar";
function Home() {
  return (
    <div>
      <NavBar />
      <div className="home-content">
        <h1>Welcome To Ticket Management System</h1>
        <p>
          Manage tickets, assign tasks and track progress.
        </p>
      </div>
    </div>
  );
}
export default Home;