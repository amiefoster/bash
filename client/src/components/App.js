import "../App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import LoginPage from "./LoginPage";
import HomeNav from "./HomeNav";
import EventDetails from "./EventDetails";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  console.log(user);

  if (!user) return <LoginPage setUser={setUser} />;

  return (
    <div>
      <HomeNav user={user} setUser={setUser} />

      <Routes>
        <Route
          exact
          path="/"
          element={<Dashboard user={user} setUser={setUser} />}
        />
        <Route
          exact
          path="/profile"
          element={<Profile user={user} setUser={setUser} />}
        />
        <Route
          exact
          path="/events/:eventId"
          element={<EventDetails user={user} />}
        />
      </Routes>

    </div>
  );
}

export default App;

//BOOTSTRAP GRID
{
  /* <div className="container">
  <div className="row justify-content-center header-container">
    <div className="col-sm-6 header-left">LOGO goes here</div>
    <div className="col-sm-6 header-right">Nav Links go here</div>
  </div>

  <div className="row column-container">
    <div className="col-md-4 column-left">
      <h1>Div 1</h1>
    </div>
    <div className="col-md-4 column-middle">
      <h1>Div 2</h1>
    </div>
    <div className="col-md-4 column-right">
      <h1>Div 3</h1>
    </div>
  </div>
</div>; */
}
