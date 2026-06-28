import { useAuth } from "../context/AuthContext";
import "../styles/Navbar.css";

function Navbar() {

  const { user } = useAuth();

  return (
    <header className="navbar">

      <div>
        <h2>Welcome back, {user?.name} 👋</h2>
        <p>Here's what's happening in your mess today.</p>
      </div>

      <div className="profile">

        <div className="avatar">
          {user?.name?.charAt(0)}
        </div>

        <div>
          <strong>{user?.name}</strong>
          <p>{user?.role}</p>
        </div>

      </div>

    </header>
  );
}

export default Navbar;