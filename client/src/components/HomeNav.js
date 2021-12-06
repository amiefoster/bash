import { NavLink, Link } from "react-router-dom";
import logo from "../images/logo-1.png";
import Profile from "../images/profile.png";
import Logout from "../images/logout.png";
import Dashboard from "../images/dashboard.png";

function HomeNav({ setUser = () => console.log("") }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div className="row header-container">
      <div className="col-sm-6 header-left">
        <Link to="/home">
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>

      <div className="col-sm-6 header-right">
        <NavLink to="/" className="nav-link">
          <img src={Dashboard} alt="profile icon" />
        </NavLink>
        <NavLink to="/profile" className="nav-link">
          <img src={Profile} alt="profile icon" />
        </NavLink>
        <img
          src={Logout}
          alt="logout icon"
          className="nav-link"
          onClick={handleLogoutClick}
        />
      </div>
    </div>
  );
}

export default HomeNav;
