// components/SummaryCards.jsx

import "../styles/summaryCards.css";

function SummaryCards({ employees }) {
  const totalEmployees = employees.length;

  const activeEmployees = employees.filter(
    (emp) => emp.isActive
  ).length;

  const avgSalary =
    employees.reduce(
      (acc, curr) => acc + curr.salary,
      0
    ) / employees.length || 0;

  const avgRating =
    employees.reduce(
      (acc, curr) => acc + curr.performanceRating,
      0
    ) / employees.length || 0;

  return (
    <div className="cards-container">
      <div className="card">
        <h3>Total Employees</h3>
        <p>{totalEmployees}</p>
      </div>

      <div className="card">
        <h3>Active Employees</h3>
        <p>{activeEmployees}</p>
      </div>

      <div className="card">
        <h3>Average Salary</h3>
        <p>${avgSalary.toFixed(0)}</p>
      </div>

      <div className="card">
        <h3>Performance Rating</h3>
        <p>{avgRating.toFixed(1)}</p>
      </div>
    </div>
  );
}

export default SummaryCards;