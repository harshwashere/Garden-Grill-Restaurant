import { NavLink, Outlet } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <>
        <div class="adminPanel">
          <div class="sidebar">
            <div class="garden">
              <NavLink className="link">
                <p>Garden Grill</p>
                <p>Admin Panel</p>
              </NavLink>
            </div>
            <div class="lists">
              <NavLink className="link" to="users">
                <li>Users</li>
              </NavLink>
              <NavLink className="link" to="contacts">
                <li>Contacts</li>
              </NavLink>
              <NavLink className="link" to="menus">
                <li>Menu</li>
              </NavLink>
            </div>
          </div>
          <Outlet />
        </div>
    </>
  );
};
