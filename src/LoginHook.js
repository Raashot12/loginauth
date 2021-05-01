/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const LoginHooks = () => {
  const [login, setLogin] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };
  return [login, handleChange];
};
export default LoginHooks;
