import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";
import { URL } from "./helper";
export const AdminUsers = () => {
  const adminUserURL = `${URL}/api/admin/users`;

  const [users, setUsers] = useState([]);

  const { authorizationToken, isLoggedIn, user } = useAuth();

  const getUsersData = async () => {
    try {
      const response = await fetch(adminUserURL, {
        methods: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  // const deleteUser = async (id) => {
  //   const response = await fetch(
  //     `http://localhost:8000/api/admin/users/delete/${id}`,
  //     {
  //       methods: "DELETE",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: authorizationToken,
  //       },
  //     }
  //   );
  //   const data = await response.json();
  //   console.log("Users After Delete ", data);
  //   if (response.ok) {
  //     getUsersData();
  //   }
  // };

  useEffect(() => {
    getUsersData();
  });

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
          <div className="userTable">
            <table>
              <thead>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
              </thead>
              <tbody>
                {users ? (
                  users.map((curUser, index) => {
                    return (
                      <>
                        <tr key={index}>
                          <td>{curUser.name}</td>
                          <td>{curUser.email}</td>
                          <td>{curUser.number}</td>
                          <td>
                            <Link to={`/admin/users/${curUser._id}/edit`}>
                              Edit
                            </Link>
                          </td>
                        </tr>
                      </>
                    );
                  })
                ) : (
                  <></>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
