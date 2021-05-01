/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const RegisterHook = () => {
  const [register, setRegister] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({
      ...register,
      [name]: value,
    });
  };
  return [register, handleChange, setRegister];
};
export default RegisterHook;
