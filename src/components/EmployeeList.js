import { EmployeeItem } from "./EmployeeItem";
import { useEffect, useState } from "react";
import { getListEmployees } from "../service/localstorage";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setEmployees(getListEmployees());
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <h4 style={{ marginLeft: "40%", fontSize: "150%", color: "#4B6A54" }}>
          Manage Employees
        </h4>

        {employees.length > 0 ? (
          <div>
            <table
              style={{
                minWidth: "80%",
                background: "#4B6A54",
                marginLeft: "10%",
                color:"white"
              }}
            >
              <thead
                style={{
                  background: "#123731",
                  color: "white",
                  paddingTop: "30%",
                  fontSize: "120%",
                }}
              >
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Address</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <EmployeeItem
                    employee={employee}
                    key={employee.id}
                    setEmployees={setEmployees}
                  />
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h4 style={{ marginLeft: "15%", fontSize: "150%", color: "red" }}>No employees added in the List! Please click on create employee buttton to create Emp.</h4>
        )}
      </div>
      
      <button
        style={{
          cursor: "pointer",
          fontSize: "92%",
          background: "#4B6A54",
          fontWeight:"bold",
          color: "white",
          borderRadius: "5px",
          padding: "9px 19px",
          border:"none",
          transform: "translate(-50%, -50%)",
          msTransform : "translate(-50%, -50%)",
          position: "absolute",
          marginTop: "2.5%",
          left: "16%",
        }}
        onClick={() => navigate("/create-employee")}
      >
        Create Employee
      </button>
    </>
  );
};
