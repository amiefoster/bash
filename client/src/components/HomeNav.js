import { NavLink, Link } from 'react-router-dom'
import logo from '../images/logo.png'

function HomeNav( { setUser = () => console.log('') }) {

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
                <Link to="/">
                    <img src={logo} className="logo"/>
                </Link>
            </div>

            <div className="col-sm-6 header-right">
                <NavLink to="/profile" className="nav-link">
                        <p>My Profile</p>
                </NavLink>
                <button className="nav-link" onClick={handleLogoutClick}>
                        <p>Log Out</p>
                </button>
            </div>
        </div>
    )
}

export default HomeNav;