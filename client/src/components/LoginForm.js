import { useState } from "react";
import { useNavigate } from 'react-router-dom';


function LoginForm({ setUser = () => console.log("") }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => setUser(user) && console.log(user)).then(navigate("/"));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  };
  console.log(errors);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-6 login-form">

          <form onSubmit={(e) => handleSubmit(e)} className="login-box">
            <div className="login-text-field">
              <label htmlFor="username"></label>
              <input
                className="login-text"
                type="text"
                placeholder="Username"
                id="username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="login-text-field">
              <label htmlFor="password"></label>
              <input
                className="login-text"
                type="password"
                placeholder="Password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button className="new-detail-button margin-center" type="submit">
                {isLoading ? "Loading..." : "Login"}
              </button>
            </div>
            <div>
              {/* {errors.map((err) => (
            <Error key={err}>{err}</Error>
            ))} */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
