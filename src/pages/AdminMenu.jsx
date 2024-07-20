import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";

export const AdminMenu = () => {
  const { Store, isLoggedIn, user } = useAuth();

  const dataMap = (val, index) => {
    return (
      <>
        <tbody>
          <tr key={index}>
            <td>{val.image}</td>
            <td>{val.name}</td>
            <td>{val.price}</td>
            {/* <td>
              <Link to={`/admin/adminGetMenu/${val._id}/edit`}>Edit</Link>
            </td> */}
          </tr>
        </tbody>
      </>
    );
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
          <div className="menutable">
            <table>
              <thead>
                <th>Food Image</th>
                <th>Food Name</th>
                <th>Price</th>
                {/* <th>Update</th> */}
              </thead>
              {Store ? <>{Store.map(dataMap)}</> : ""}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
