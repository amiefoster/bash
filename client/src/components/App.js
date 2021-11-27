import '../App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import Dashboard from './Dashboard';
import Profile from './Profile';
import LoginPage from './LoginPage';


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


  if (!user) return <LoginPage setUser={setUser} />;

  return (
    <div>   
        {/* <div class="container">

          <div class="row justify-content-center header-container">
              <div class="col-sm-6 header-left">LOGO goes here</div>
              <div class="col-sm-6 header-right">Nav Links go here</div>
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
        </div> */}

        <Routes>
          {/* <Route exact path ="/homepage" element={<Homepage user={user} setUser={setUser} />} /> */}
          <Route exact path ="/" element={ <Dashboard user={user} setUser={setUser}/> } />
          <Route exact path ="/profile" element={ <Profile user={user} setUser={setUser}/> } />
          
      </Routes>  
      
    </div>
  );
}

export default App;

//This will hold user state
    //if (!user) return <Homepage setUser={setUser} />;
      //otherwise if there is a user it will go to <Dashboard/>
      //will hold Navbar for if there is a user logged in
          //Will have links for
              //Home
              //Dashboard
              //Profile
        //this is where it will dynamically route to show all the users <Events/>
