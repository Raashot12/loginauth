import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const notify = () => {
    toast.success("Congratulation you have Login Successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(login);
    //Setting input to initiial state
    fetch("http://66.228.56.214:3000/auth/login", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        if (res.statusCode === 200) {
          history.push("/dashboard");
          notify();
          const token = res.data.token;
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(res.data.user));
        } else if (res.errorMessage === "Account not found.") {
          alert("Account not found.");
        } else if (res.errorMessage === "Invalid email or password.") {
          alert("Invalid email or password.");
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
      <form>
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
        <button type="submit" onSubmit={handleSubmit}>
          Submit
        </button>
        <Link to="/"> Register here</Link>
      </form>
    </div>
  );
};
export default Login;
