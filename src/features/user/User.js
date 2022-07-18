import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { requestUser, addUser } from "./userSlice";
import "./user.css";
import { useSelector } from 'react-redux';
import LoadingSpinner from "../spinner/LoadingSpinner";

function User() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const status = useSelector(state => state.user.status);

  useEffect(() => {
    dispatch(requestUser());
  }, []);

  const renderUser = () => {
    if(status==="loading"){
        return (LoadingSpinner())
    }else{
    return (
      <>
        <div className="user__left">
          <img src={user?user.picture.large:""} alt="" />
        </div>
        <div className="user__right">
          {
            <ul>
              <li>
                <h1>
                  {user?user.name.first:"NA"} {user?user.name.last:"NA"}
                </h1>
              </li>
              <li>
                <h3>Email: {user?user.email:"NA"}</h3>
              </li>
              <li>
                <h3>Phone: {user?user.phone:"NA"}</h3>
              </li>
              <li>
                <h3>City: {user?user.location.city:"NA"}</h3>
              </li>
            </ul>
          }
            <ul>
              <li>
              <button className="fetch-button" onClick={()=>{dispatch(requestUser())}} >Fetch Random User</button>
              </li>
            </ul>
        </div>
      </>
    );
}
  };

  return <div className="user">{renderUser()}</div>;
}

export default User;
