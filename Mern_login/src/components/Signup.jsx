import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:4000/signup", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "yes") {
            alert("User already exists");
          } else if (res.data === "no") {
            navigate("/", { state: { id: email } });
          }
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <h1>Signup</h1>
      <form action="POST">
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)} // Fixed here
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)} // Fixed here
        />
        <br />
        <input type="submit" onClick={submit} />
      </form>
      <br />
      Already have an account?
      <Link to="/"> Signin</Link>
    </div>
  );
}

export default Signup;
