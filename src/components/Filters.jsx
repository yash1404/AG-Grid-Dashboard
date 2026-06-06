// components/Filters.jsx

import "../styles/filters.css";

function Filters({
  employees,
  department,
  setDepartment,
  location,
  setLocation,
  status,
  setStatus,
}) {
  const departments = [
    ...new Set(
      employees.map((emp) => emp.department)
    ),
  ];

  const locations = [
    ...new Set(
      employees.map((emp) => emp.location)
    ),
  ];

  return (
    <div className="filters">
      <select
        value={department}
        onChange={(e) =>
          setDepartment(e.target.value)
        }
      >
        <option value="">
          All Departments
        </option>

        {departments.map((dept) => (
          <option
            key={dept}
            value={dept}
          >
            {dept}
          </option>
        ))}
      </select>

      <select
        value={location}
        onChange={(e) =>
          setLocation(e.target.value)
        }
      >
        <option value="">
          All Locations
        </option>

        {locations.map((loc) => (
          <option
            key={loc}
            value={loc}
          >
            {loc}
          </option>
        ))}
      </select>

      <select
        value={status}
        onChange={(e) =>
          setStatus(e.target.value)
        }
      >
        <option value="">
          All Status
        </option>

        <option value="active">
          Active
        </option>

        <option value="inactive">
          Inactive
        </option>
      </select>
    </div>
  );
}

export default Filters;