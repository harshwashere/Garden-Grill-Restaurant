import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import { useState } from "react";

export const Navbar = () => {
  const { isLoggedIn, user } = useAuth();
  const [visible,setVisible] = useState(false)

  const visibility = ()=>{
    setVisible(!visible)
  }
 
  return (
    <>
      <header className="navbar">

        <div className="nav-left">
          <img src="/Images/bg-nav-l.png" alt="" />
        </div>

        <div className="gardenLogo">
          <NavLink className="link" to="/">
            <img
              src="/Images/Garden Grill Restaurant.png"
              alt="Logo"
              height="70px"
              width="100%"
            />
          </NavLink>
        </div>


        <div className="navbtn">
        
          <div className="home" id="home">
            <NavLink className="link" to="/">
              Home
            </NavLink>
          </div>

          <div className="menu" id="menu">
            <NavLink className="link" to="/Menu">
              Menu
            </NavLink>
          </div>

          <div className="abus" id="abus">
            <NavLink className="link" to="/About">
              About Us
            </NavLink>
          </div>

          <div className="cont" id="cont">
            <NavLink className="link" to="/Contact">
              Contact
            </NavLink>
          </div>

          <div className="changer">
            {isLoggedIn ? (
              <div className="sldiv">
                <NavLink className="link" id="cartlogo" to="/Cart">
                  <i className="bi bi-bag"></i>
                </NavLink>

                <div className="slbtname">
                  <p>Hello {user.name}</p>
                </div>

                <NavLink className="link" to="/Logout">
                  <button type="button" className="slbtn3" id="slbtn3">
                    Logout
                  </button>
                </NavLink>
              </div>
            ) : (
              <>
                <div className="logsign">
                  <NavLink className="link" to="/Signup">
                    <button type="button" className="slbtn1" id="slbtn1">
                      Sign Up
                    </button>
                  </NavLink>

                  <NavLink className="link" to="/Login">
                    <button type="button" className="slbtn2" id="slbtn2">
                      Log In
                    </button>
                  </NavLink>
                </div>
              </>
            )}
          </div>
          <div className="bar" onClick={visibility}> <i className="bi bi-list"></i></div>
        </div>

        <div className="right"><img src="/Images/bg-nav-r2.png" alt="" /></div>
        <div style={{display:visible? "block":"none"}} className="otherMenu">
        <div className="cross" onClick={visibility}><i className="bi bi-x"></i></div>
          <div >
            <NavLink onClick={visibility} className="link2" to="/">
              Home
            </NavLink>
          </div>

          <div >
            <NavLink onClick={visibility} className="link2" to="/Menu">
              Menu
            </NavLink>
          </div>

          <div >
            <NavLink onClick={visibility} className="link2" to="/About">
              About Us
            </NavLink>
          </div>

          <div >
            <NavLink onClick={visibility} className="link2" to="/Contact">
              Contact
            </NavLink>
          </div>
          <div >
            {isLoggedIn ? (
              <div className="change">
                <NavLink className="link2"  id="cartlogo" to="/Cart">
                  <i className="bi bi-bag"></i>
                </NavLink>

                <div className="slbtname2">
                  <p>Hello {user.name}</p>
                </div>

                <NavLink className="link" to="/Logout">

                  Logout

                </NavLink>
              </div>
            ) : (
              <>
                <div className="logsign2">
                  <div>
                    <NavLink style={{ height: "1cm" }} className="link2" to="/Signup">

                      Sign Up

                    </NavLink>
                  </div>

                  <NavLink className="link2" to="/Login">

                    Log In

                  </NavLink>
                </div>
              </>
            )}
          </div>
        </div>

      </header>
    </>
  );
};
