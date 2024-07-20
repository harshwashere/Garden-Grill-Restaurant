import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <p className="greet">
          Thank You For Visiting Our Website.<span>&#10084;</span>
        </p>
        <div className="social-btn">
          <a href="https://www.instagram.com/harshwashere/" target="_blank">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/harshwashere/" target="_blank">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/harshwashere" target="_blank">
            <i className="bi bi-github"></i>
          </a>
        </div>
        <div className="quick-bar">
          <NavLink className="link" to="/">Home</NavLink>
          <NavLink className="link" to="/Menu">Menu</NavLink>
          <NavLink className="link" to="/About">About Us</NavLink>
          <NavLink className="link" to="/Contact">Contact</NavLink>
        </div>
        <p>Copyright &copy; 2024 Harsh Chauhan. All right reserved</p>
      </div>
    </>
  );
};
