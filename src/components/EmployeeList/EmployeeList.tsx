import { useState } from "react";
import { EmployeeCard } from "../EmployeeCard/EmployeeCard";
import { Employee } from "../../types/Employee";
import { EmployeeFilter } from "./EmployeeFilter";

type FilterParams = {
  name?: string;
  office?: string;
};

type EmployeeListProps = {
  employees: Employee[];
  filterParams: FilterParams;
};

const filterEmployees = ({ employees, filterParams }: EmployeeListProps) => {
  const { name, office } = filterParams;
  return employees.filter((employee) => {
    const byName = name
      ? employee.name.toLowerCase().includes(name.toLowerCase())
      : true;
    const byOffice =
      office && office !== "All" ? employee.office === office : true;
    return byName && byOffice;
  });
};

export const EmployeeList = ({ employees }: { employees: Employee[] }) => {
  const [filteredEmployees, setFilteredEmployees] = useState(employees);
  const applyFilter = (filterParams: { name?: string; office?: string }) => {
    const filtered = filterEmployees({ employees, filterParams });
    setFilteredEmployees(filtered);
  };

  return (
    <>
      <EmployeeFilter setFilter={applyFilter} />
      <div className="employeeList">
        {filteredEmployees.map((employee, id) => (
          <EmployeeCard employee={employee} key={id} />
        ))}
      </div>
    </>
  );
};
