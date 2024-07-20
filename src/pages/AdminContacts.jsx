import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { URL } from "./helper";
const URLs = `${URL}/api/admin/contacts`;

export const AdminContacts = () => {
  const [contacts, setContactData] = useState([]);
  const { authorizationToken, isLoggedIn, user } = useAuth();
  const getContactsData = async () => {
    try {
      const response = await fetch(URLs, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setContactData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getContactsData();
  }, []);
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
          <div className="contactTable">
          <table>
            <thead>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Subject</th>
              <th>Message</th>
            </thead>
            <tbody>
              {contacts.map((curCont, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td>{curCont.name}</td>
                      <td>{curCont.email}</td>
                      <td>{curCont.number}</td>
                      <td>{curCont.subject}</td>
                      <td>{curCont.message}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </>
  );
};
