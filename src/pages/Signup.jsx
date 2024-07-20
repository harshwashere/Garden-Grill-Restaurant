import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { URL } from "./helper";

export const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confpassword: "",
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
      const response = await fetch(`${URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const responseData = await response.json();
      console.log("Response from server", responseData.msg);

      if (response.status === 200) {
        storeTokenInLS(responseData.token);
        setUser({
          name: "",
          phone: "",
          email: "",
          password: "",
          confpassword: "",
        });
        toast.success("Registered Successfully");
        navigate("/");
      } else if (response.status === 400) {
        toast.error("User Already Exist");
      } else if (response.status === 401) {
        toast.warn("Phone number already exist");
      }
    } catch (error) {
      console.error("Register", error);
    }
  };

  return (
    <>
      <div className="signupbody">
        <div className="body">
          <div className="box">
            <div className="container">
              <form method="POST" onSubmit={handleSubmit}>
                <div className="top-header">
                  <header className="header1">Sign Up</header>
                </div>

                <div className="input-field">
                  <input
                    type="text"
                    className="signupinput"
                    name="name"
                    id="txtname"
                    placeholder="Your name"
                    value={user.name}
                    onChange={handleInput}
                    required
                  />
                  <i id="i" className="bi bi-person-fill"></i>
                </div>
                <div className="input-field">
                  <input
                    type="tel"
                    className="signupinput"
                    name="phone"
                    id="txtnum"
                    placeholder="Mobile number "
                    pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                    title="Please Enter a 10 Digit Number"
                    value={user.phone}
                    onChange={handleInput}
                    required
                  />
                  <i id="i" className="bi bi-telephone-fill"></i>
                </div>
                <div className="input-field">
                  <input
                    type="email"
                    className="signupinput"
                    name="email"
                    id="txtemail"
                    placeholder="Enter an email address"
                    pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                    title="Please enter in this format example@example.com"
                    value={user.email}
                    onChange={handleInput}
                    required
                  />
                  <i id="i" className="bi bi-envelope-at-fill"></i>
                </div>
                <div className="input-field">
                  <input
                    type="password"
                    className="signupinput"
                    name="password"
                    id="txtpwd"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleInput}
                    required
                  />
                  <i id="i" className="bi bi-person-fill-lock"></i>
                </div>
                <div className="input-field">
                  <input
                    type="password"
                    className="signupinput"
                    name="confpassword"
                    id="txtcpwd"
                    placeholder="Re-type Password"
                    value={user.confpassword}
                    onChange={handleInput}
                    required
                  />
                  <i id="i" className="bi bi-person-fill-lock"></i>
                </div>
                <div className="input-field">
                  <button type="submit" className="submit">
                    Sign Up
                  </button>
                </div>

                <div className="bottom">
                  <div className="left">
                    <p className="sup">
                      <span className="sulink2">
                        Already have an account?
                        <NavLink className="linksignup" to={"/Login"}>
                          Log In
                        </NavLink>
                      </span>
                    </p>
                  </div>
                  <div className="sigright">
                    <NavLink className="link" to={"/"}>
                      <p>Came here to explore, Click Here</p>
                    </NavLink>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
