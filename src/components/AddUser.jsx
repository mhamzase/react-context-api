import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "./UserContext";

function AddUser() {
  const initialValues = {
    name: "",
    age: "",
    city: "",
  };

  const [users, setUsers] = useContext(UserContext);

  const [newData, setNewData] = useState(initialValues);


  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setNewData({
      ...newData,
      [name]: value,
    });
  };

  const addUser = (e) => {
    e.preventDefault();

    setUsers([
      ...users,
      { name: newData.name, age: newData.age, city: newData.city },
    ]);
    document.getElementById("user-form").reset();
  };

  return (
    <>
      <form id="user-form" onSubmit={addUser}>
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={handleChangeInput}
        />
        <br />
        <input
          type="text"
          placeholder="age"
          name="age"
          onChange={handleChangeInput}
        />
        <br />
        <input
          type="text"
          placeholder="city"
          name="city"
          onChange={handleChangeInput}
        />
        <br />
        <button type="submit">Add User</button>
      </form>
    </>
  );
}

export default AddUser;
