import React from "react";
import { Link } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import RegisterHook from "./RegisterHook";

const Register = () => {
  const [register, handleChange, setRegister] = RegisterHook();
  const [userstate, setuserstate] = React.useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(register);
    //Setting input to initiial state
    fetch("http://66.228.56.214:3000/auth/register", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(register),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.statusCode === 200) {
          setuserstate(res.successMessage);
          setRegister({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            password: "",
            id: "",
          });
        }
      });
  };
  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        gridTemplateColumns: "60%",
        gridTemplateAreas: "20%",
      }}
    >
      <form onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center" }}>Register</h2>
        <label>
          First Name:
          <input
            name="firstname"
            type="text"
            value={register.firstname}
            onChange={handleChange}
            required
          ></input>
        </label>
        <label>
          Last Name:
          <input
            name="lastname"
            type="text"
            value={register.lastname}
            onChange={handleChange}
            required
          ></input>
        </label>
        <label>
          Email:
          <input
            name="email"
            type="email"
            value={register.email}
            onChange={handleChange}
            required
          ></input>
        </label>
        <label>
          Phone:
          <input
            name="phone"
            type="phone"
            value={register.phone}
            onChange={handleChange}
            required
          ></input>
        </label>
        <label>
          Personal Unique ID :
          <input
            name="id"
            type="number"
            value={register.id}
            onChange={handleChange}
            required
          ></input>
        </label>
        <label>
          Password:
          <input
            name="password"
            type="password"
            value={register.password}
            onChange={handleChange}
            required
          ></input>
        </label>
        <button type="submit">Submit</button>
      </form>
      {userstate && (
        <p
          style={{
            background: "green",
            color: "white",
            width: "50%",
            textAlign: "center",
            margin: "0 auto",
          }}
        >
          {userstate} and use your registered details to login at{" "}
          <Link to="/">here</Link>
        </p>
      )}
    </div>
  );
};
export default Register;
