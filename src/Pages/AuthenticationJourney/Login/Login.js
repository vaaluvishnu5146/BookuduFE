import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function Login() {
  const [formData, setFormData] = useState({});
  const navigator = useNavigate();

  function handleInput(e) {
    let formDataCopy = {
      ...formData,
    };
    formDataCopy[e.target.id] = e.target.value;
    setFormData(formDataCopy);
  }

  function handleLogin(e) {
    fetch("http://localhost:5000/auth/signin", {
      headers: {
        "Content-Type": "Application/json",
      },
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res && res.success && res.token) {
          try {
            sessionStorage.setItem("Authorization", res.token);
            navigator("/home");
          } catch (err) {
            console.error("Error Saving Token", err);
            // navigator("/home");
          }
        }
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <input
        placeholder="Enter Email"
        type="email"
        id="email"
        onChange={handleInput}
      />
      <input
        placeholder="Enter Password"
        type="password"
        id="password"
        onChange={handleInput}
      />
      <button onClick={handleLogin}>Sign in</button>
      <Button variant="text">Text</Button>
    </div>
  );
}

export default Login;
