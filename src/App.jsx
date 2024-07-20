import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Cart } from "./pages/Cart";
import { Logout } from "./pages/Logout";
import { AdminLayout } from "./components/layout/Admin-Layout";
import { AdminUsers } from "./pages/AdminUsers";
import { AdminContacts } from "./pages/AdminContacts";
import { AdminLogin } from "./pages/adminLogin";
import { Provider } from "react-redux";
import store from "./redux/store";
import { AdminUpdate } from "./pages/AdminUpdate";
import "../public/css/home.css";
import "../public/css/menu.css";
import "../public/css/aboutus.css";
import "../public/css/contact.css";
import "../public/css/cart.css";
import "../public/css/signin.css";
import "../public/css/signup.css";
import "../public/css/Admin/adminUser.css";
import "../public/css/Admin/adminLogin.css";
import "../public/css/navbar.css";
import "../public/css/footer.css";
import { AdminMenu } from "./pages/AdminMenu";
import { AdminMenuUpdate } from "./pages/AdminMenuUpdate";
import { Navbar } from "./pages/Navbar";

const App = () => {
  return (
    <>
      <Provider store={store}>
      
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Logout" element={<Logout />} />
            <Route path="/Adlogin" element={<AdminLogin />} />
            <Route path="/Admin" element={<AdminLayout />}>
              <Route path="users" element={<AdminUsers />} />
              <Route path="contacts" element={<AdminContacts />} />
              <Route path="users/:id/edit" element={<AdminUpdate />} />
              <Route path="menus" element={<AdminMenu />} />
              <Route path="adminGetMenu/:id/edit" element={<AdminMenuUpdate />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
