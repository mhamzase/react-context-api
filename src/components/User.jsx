import React from "react";

function User({ name, age, city }) {
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{age}</td>
        <td>{city}</td>
      </tr>
    </>
  );
}

export default User;
