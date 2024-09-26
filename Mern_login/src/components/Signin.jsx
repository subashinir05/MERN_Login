import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function submit(e) {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:4000/", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "yes") {
            navigate("/home", { state: { id: email } });
          } else if (res.data === "no") {
            alert("User not found");
          }
        });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div>
      <h1>Signin</h1>
      <form action="POST">
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <input type="submit" onClick={submit} />
      </form>
      <br />
      Don't have an account?
      <Link to="/signup"> Signup</Link>
    </div>
  );
}

export default Signin;
