import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { URL } from "./helper";
export const AdminUpdate = () => {
  const [data, setData] = useState({
    name: "",
    number: "",
    email: "",
  });

  const params = useParams();
  const { authorizationToken, isLoggedIn, user } = useAuth();

  const getSingleUserData = async () => {
    const response = await fetch(
      `${URL}/api/admin/users/${params.id}`,
      {
        methods: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      }
    );
    const data = await response.json();
    setData(data);
    // if (response.ok) {
    //   getUsersData();
    // }
  };

  useEffect(() => {
    getSingleUserData();
  }, []);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8000/api/admin/users/update/${params.id}`,
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
        <div class="content">
          <div>
            {isLoggedIn ? (
              <div class="adminHeading">
                <div class="harsh">{user.name}</div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div class="mainContent">
            <form method="POST" onSubmit={handleSubmit}>
              <div className="top-header">
                <header className="header1">Update User Data</header>
              </div>

              <div className="input-field">
                <input
                  type="text"
                  className="signupinput"
                  name="name"
                  id="txtname"
                  placeholder="John Doe"
                  value={data.name}
                  onChange={handleInput}
                  required
                />
                <i id="i" className="bi bi-person-fill"></i>
              </div>
              <div className="input-field">
                <input
                  type="tel"
                  className="signupinput"
                  name="number"
                  id="txtnum"
                  placeholder="74359xxxxx"
                  pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                  title="Please Enter a 10 Digit Number"
                  value={data.number}
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
                  placeholder="johndoe@example.com"
                  pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                  title="Please enter in this format example@example.com"
                  value={data.email}
                  onChange={handleInput}
                  required
                />
                <i id="i" className="bi bi-envelope-at-fill"></i>
              </div>
              <div className="input-field">
                <button type="submit" className="submit">
                  Update User Details
                </button>
              </div>
            </form>
          </div>
      </div>
    </>
  );
};
