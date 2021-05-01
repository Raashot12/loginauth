import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import { navigate } from "@reach/router";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const Login = () => {
  const [login, setLogin] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    id: "",
  });
  //   const [user, setUser] = useState(null);
  const history = useHistory();

  // const notify = () => {
  //   toast.success("Congratulation you have Login Successfully", {
  //     position: toast.POSITION.TOP_CENTER,
  //   });
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };
  let handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post("http://66.228.56.214:3000/auth/login", login)
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          history.push("/signup");
        }
      });
  };
  // useEffect(() => {
  //   handleSubmit();
  // }, [login]);

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
        <h2 style={{ textAlign: "center" }}>Welcome Back</h2>
        <label>
          First Name:
          <input
            name="firstname"
            type="text"
            value={login.firstname}
            onChange={handleChange}
            required
          ></input>
        </label>
        <label>
          Last Name:
          <input
            name="lastname"
            type="text"
            value={login.lastname}
            onChange={handleChange}
            required
          ></input>
        </label>
        <label>
          Email:
          <input
            name="email"
            type="email"
            value={login.email}
            onChange={handleChange}
            required
          ></input>
        </label>
        <label>
          Phone:
          <input
            name="phone"
            type="phone"
            value={login.phone}
            onChange={handleChange}
            required
          ></input>
        </label>
        <label>
          Personal Unique ID :
          <input
            name="id"
            type="number"
            value={login.id}
            onChange={handleChange}
            required
          ></input>
        </label>
        <label>
          Password:
          <input
            name="password"
            type="password"
            value={login.password}
            onChange={handleChange}
            required
          ></input>
        </label>
        <button type="submit">Submit</button>
        <Link to="/register"> Register here</Link>
      </form>
    </div>
  );
};
export default Login;
