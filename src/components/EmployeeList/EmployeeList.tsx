import { useState } from "react";
import { EmployeeCard } from "../EmployeeCard/EmployeeCard";
import { Employee } from "../../types/Employee";
import { EmployeeFilter } from "./EmployeeFilter";

export const EmployeeList = ({ employees }: { employees: Employee[] }) => {
  const [allEmployees, setAllEmployees] = useState(employees);

  const filterEmployees = (office: string) => {
    const filteredEmployees =
      office === "All"
        ? employees
        : employees.filter((employee) => employee.office === office);
    setAllEmployees(filteredEmployees);
  };

  return (
    <>
      <EmployeeFilter setFilter={filterEmployees} />
      <div className="employeeList">
        {allEmployees.map((employee, id) => (
          <EmployeeCard employee={employee} key={id} />
        ))}
      </div>
    </>
  );
};
