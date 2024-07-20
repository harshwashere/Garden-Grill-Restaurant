import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { URL } from "./helper";


export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch(`${URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.status === 200) {
        const responseData = await response.json();
        storeTokenInLS(responseData.token);
        setUser({ email: "", password: "" });
        toast.success("Login Successful");
        navigate("/");
      } else if (response.status === 401) {
        toast.error("Invalid Credentials");
      } else if (response.status === 400) {
        toast.warn("User Doesn't Exist");
      }
    } catch (error) {
      console.error("Login", error);
    }
  };

  return (
    <>
      <div className="loginbody">
        <div className="box">
          <div className="container">
            <form action="/signin" method="POST" onSubmit={handleSubmit}>
              <div className="top-header">
                <header className="loginheader">Login</header>
              </div>

              <div className="input-field">
                <input
                  type="text"
                  className="logininput"
                  name="email"
                  placeholder="Email address"
                  pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                  value={user.email}
                  onChange={handleInput}
                  required
                />
                <i id="loginicon" className="bi bi-envelope-at-fill"></i>
              </div>
              <div className="input-field">
                <input
                  type="password"
                  className="logininput"
                  name="password"
                  placeholder="Password"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                  value={user.password}
                  onChange={handleInput}
                  required
                />
                <i id="loginicon" className="bi bi-person-fill-lock"></i>
              </div>
              <div className="input-field">
                <button type="submit" className="loginsubmit">
                  Login
                </button>
              </div>

              <div className="bottom">
                <div className="left">
                  <p className="sup">
                    <span className="loglink2">
                      Don't have an account?
                      <NavLink className="link" to="/Signup">
                        Sign up
                      </NavLink>
                    </span>
                  </p>
                </div>
                <div className="right">
                  <NavLink className="link" to={"/"}>
                    <p>Came here to explore, Click Here</p>
                  </NavLink>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
