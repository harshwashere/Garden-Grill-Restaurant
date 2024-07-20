import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { useParams } from "react-router-dom";
import { URL } from "./helper";
export const AdminMenuUpdate = async (req, res) => {
  const [menu, setMenu] = useState({
    image: "",
    name: "",
    price: "",
  });

  const params = useParams();
  const { authorizationToken } = useAuth();

  const getSingleMenuData = async () => {
    const response = await fetch(
      `${URL}/api/admin/adminGetMenu/${params.id}`,
      {
        methods: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      }
    );
    const data = await response.json();
    console.log("Users Single Data ", data);
    setMenu(data);
    // if (response.ok) {
    //   getUsersData();
    // }
  };

  useEffect(() => {
    getSingleMenuData();
  }, []);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setMenu({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8000/api/admin/adminGetMenu/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        toast.success("Updated Successfully");
      } else {
        toast.error("Can't Update Data");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="content">
        <div className="mainContent">
          <form method="POST" onSubmit={handleSubmit}>
            <div className="topheader">
              <header className="header1">Update Menu</header>
            </div>

            <div className="input-field">
              <input
                type="text"
                className="signupinput"
                name="image"
                id="txtname"
                placeholder="Image Link"
                value={menu.image}
                onChange={handleInput}
                required
              />
              <i id="i" className="bi bi-person-fill"></i>
            </div>
            <div className="input-field">
              <input
                type="tel"
                className="signupinput"
                name="name"
                id="txtnum"
                placeholder="Food Name"
                value={menu.name}
                onChange={handleInput}
                required
              />
              <i id="i" className="bi bi-telephone-fill"></i>
            </div>
            <div className="input-field">
              <input
                type="email"
                className="signupinput"
                name="price"
                id="txtemail"
                value={menu.price}
                onChange={handleInput}
                required
              />
              <i id="i" className="bi bi-envelope-at-fill"></i>
            </div>
            <div className="input-field">
              <button type="submit" className="submit">
                Update Menu
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
