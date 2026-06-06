// components/EmployeeGrid.jsx

import { useMemo, useRef,useState} from "react";

import { AgGridReact } from "ag-grid-react";

import {
  AllCommunityModule,
  ModuleRegistry,
} from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

import "../styles/employeeGrid.css";

ModuleRegistry.registerModules([
  AllCommunityModule,
]);

function EmployeeGrid({ employees }) {
  const gridRef = useRef();

  const rowData = useMemo(() => {
    return employees.map((emp) => ({
      ...emp,
      fullName: `${emp.firstName} ${emp.lastName}`,
    }));
  }, [employees]);

  const columnDefs = useMemo(
    () => [
      {
        field: "id",
        width: 90,
      },

      {
        field: "fullName",
      },

      {
        field: "department",
      },

      {
        field: "position",
      },

      {
        field: "location",
      },

      {
        field: "salary",
        valueFormatter: (params) =>
          `$${params.value.toLocaleString()}`,
      },

      {
        field: "performanceRating",
      },

      {
        field: "projectsCompleted",
      },

      {
        field: "manager",
      },

      {
        field: "isActive",
        cellRenderer: (params) => (
          <span
            className={
              params.value
                ? "active-status"
                : "inactive-status"
            }
          >
            {params.value
              ? "Active"
              : "Inactive"}
          </span>
        ),
      },
    ],
    []
  );

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      floatingFilter: true,
      resizable: true,
      flex: 1,
    }),
    []
  );

  const exportCSV = () => {
    gridRef.current.api.exportDataAsCsv();
  };

  return (
    <>
      <button
        className="export-btn"
        onClick={exportCSV}
      >
        Export CSV
      </button>


      <div className="grid-wrapper">
      <div
        className="ag-theme-quartz"
        style={{
          width: "100%",
        }}
      >
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          pagination
          paginationPageSize={10}
          rowSelection="multiple"
          animateRows
          domLayout="autoHeight"
          rowHeight={40}
        />
      </div>
      </div>
    </>
  );
}

export default EmployeeGrid;