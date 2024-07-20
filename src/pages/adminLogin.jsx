import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { useState } from "react";
import { toast } from "react-toastify";
import { URL } from "./helper";
const URLs = `${URL}/api/admin/login`;
export const AdminLogin = () => {
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
      const response = await fetch(URLs, {
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
        navigate("users");
      } else if (response.status === 401) {
        toast.error("Invalid Credentials");
      }
    } catch (error) {
      console.error("Login", error);
    }
  };
  return (
    <>
      <div className="adminLoginBody">
        <div className="box">
          <div className="container">
            <form method="POST" onSubmit={handleSubmit}>
              <div className="top-header">
                <header className="adloginheader">Admin Login</header>
              </div>

              <div className="input-field">
                <input
                  type="text"
                  className="input"
                  name="email"
                  placeholder="Email address"
                  pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                  value={user.email}
                  onChange={handleInput}
                  required
                />
                <i className="bi bi-envelope-at-fill" id="loginicon"></i>
              </div>
              <div className="input-field">
                <input
                  type="password"
                  className="input"
                  name="password"
                  placeholder="Password"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                  value={user.password}
                  onChange={handleInput}
                  required
                />
                <i className="bi bi-person-fill-lock" id="loginicon"></i>
              </div>
              <div className="input-field">
                <button type="submit" className="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
