import React from "react";
import { removeEmployee } from "../service/localstorage";
import { getListEmployees } from "../service/localstorage";
import { useNavigate } from "react-router-dom";

export const EmployeeItem = ({ employee, setEmployees }) => {
  const { id, name, email, address, phone } = employee;
  const navigate = useNavigate();

  const deleteEmployee = () => {
    removeEmployee(id);
    setEmployees(getListEmployees());
  };

  return (
    <tr >
      <th>{name}</th>
      <td style={{ display: "flex", justifyContent: "space-evenly" }}>{email}</td>
      <td>{address}</td>
      <td >{phone}</td>
      <td>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <span
            type="button"
            style={{
              cursor: "pointer",
              fontSize: "89%",
              background: "#2EBA7A",
              color: "white",
              fontWeight:"bold",
              borderRadius: "5px",
              padding: "8px 19px",
              border:"none",
            }}
            onClick={() => navigate(`/edit-employee/${id}`)}
          >
            Edit
          </span>

          <span
            type="button"
            style={{
              cursor: "progress",
              fontSize: "89%",
              background: "#E34934",
              fontWeight:"bold",
              color: "white",
              borderRadius: "5px",
              padding: "8px 19px",
              border:"none",
            }}
            onClick={() => deleteEmployee()}
          >
            Delete
          </span>
        </div>
      </td>
    </tr>
  );
};
