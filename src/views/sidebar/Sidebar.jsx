import React from "react";
import { Link } from "react-router-dom";
import bug from "./bug2.png";
import "./sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../controllers/redux/authReducer";

export default function Sidebar() {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);

  function SignOut() {
    dispatch(signOut());
  }
  return (
    <div className="sidebar">
      <Link className="nav-link" to="/">
        <img src={bug} width="100px" alt="bug logo" />
        <h1 className="brand">Bug-Tracker</h1>
        <ul>
          <li>
            <Link to="/" className="nav-link">
              Dashboard
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/viewbugs" className="nav-link">
              View Bugs
            </Link>
          </li>
          {auth.admin && (
            <li>
              {" "}
              <Link to="/create" className="nav-link">
                Create Bugs
              </Link>
            </li>
          )}
        </ul>
      </Link>
      <button className="nav-link logout" onClick={SignOut}>
        Logout
      </button>
    </div>
  );
}
