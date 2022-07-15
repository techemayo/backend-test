import React, { useEffect, useState } from "react";
import "./user.css";

import axios from "axios";

function User() {
  const [user, setUser] = useState("");

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://randomuser.me/api/`,
    };
    axios
      .request(options)
      .then((response) => {
        setUser(response.data.results[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderUser = () => {
    return (
      <>
        <div className="user__left">
          <img src={user.picture.large} alt="" />
        </div>
        <div className="user__right">
          {
            <ul>
              <li>
                <h1>
                  {user.name.first} {user.name.last}
                </h1>
              </li>
              <li>
                <h3>Email: {user.email}</h3>
              </li>
              <li>
                <h3>Phone: {user.phone}</h3>
              </li>
              <li>
                <h3>City: {user.location.city}</h3>
              </li>
            </ul>
          }
        </div>
      </>
    );
  };

  return <div className="user">{renderUser()}</div>;
}

export default User;
