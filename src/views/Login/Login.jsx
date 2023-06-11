import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../../controllers/redux/authReducer";
import "./login.css";
export default function Login() {
  const dispatch = useDispatch();

  const [formInput, setFormInput] = useState({
    name: "",
    password: "",
  });
  function inputChanged(e) {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  }
  function submit(e) {
    e.preventDefault();
    dispatch(signIn(formInput));
  }

  return (
    <div className="loginBg">
      <form className="login-panel">
        <h1>Login:</h1>
        <input
          name="name"
          placeholder="Name"
          onChange={inputChanged}
          value={formInput.name}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={inputChanged}
          value={formInput.password}
        />{" "}
        <div className="btn">
          <button type="submit" onClick={submit}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
