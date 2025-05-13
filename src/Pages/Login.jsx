import axios from "axios";
import React, { useState } from "react";

import styled from "styled-components";

export const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const logindata = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      }, {
        header: {
          "x-api-key": "reqres-free-v1"
        }
      });
  console.log(res.data.token);
  alert("Successful login");
} catch (error) {
  console.error(error);
  alert("Login failed");
}
};

return (
  <DIV>
    <form onSubmit={logindata}>
      <h2>Log In</h2>
      <input
        data-testid="user-email"
        type="email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        data-testid="user-password"
        type="password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit" data-testid="user-login">
        Log In
      </button>
    </form>
  </DIV>
);
};

const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;

  input {
    width: 80%;
    height: 30px;
    font-size: larger;
  }

  button {
    width: 150px;
    height: 30px;
    font-size: large;
  }
`;
