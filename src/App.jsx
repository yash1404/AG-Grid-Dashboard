import { useMemo, useState } from "react";
import { employees } from "./data/employees";

import SummaryCards from "./components/SummaryCards";
import Filters from "./components/Filters";
import EmployeeGrid from "./components/EmployeeGrid";

import "./styles/app.css";

function App() {
  const [department, setDepartment] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");

  const filteredEmployees = useMemo(() => {
    return employees.filter((emp) => {
      const departmentMatch =
        !department || emp.department === department;

      const locationMatch =
        !location || emp.location === location;

      const statusMatch =
        status === ""
          ? true
          : emp.isActive === (status === "active");

      return (
        departmentMatch &&
        locationMatch &&
        statusMatch
      );
    });
  }, [department, location, status]);

  return (
    <div className="container">
      <h1>Employee Analytics Dashboard</h1>

      <SummaryCards employees={filteredEmployees} />

      <Filters
        employees={employees}
        department={department}
        setDepartment={setDepartment}
        location={location}
        setLocation={setLocation}
        status={status}
        setStatus={setStatus}
      />

      <EmployeeGrid employees={filteredEmployees} />
    </div>
  );
}

export default App;