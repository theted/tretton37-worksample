import { useState, FC } from "react";
import { EmployeeCard } from "../EmployeeCard/EmployeeCard";
import { Employee } from "../../types/Employee";
import { EmployeeFilter } from "../EmployeeFilter/EmployeeFilter";
import { FilterParams } from "../../types/types";
import "./EmployeeList.css";

type EmployeeFilterProps = {
  employees: Employee[];
  filterParams: FilterParams;
};

const nameMatches = (employeeName: string, name: string) =>
  employeeName.toLowerCase().includes(name.toLowerCase());

const officeMatches = (employeeOffice: string, office: string) =>
  office === "All" || employeeOffice === office;

const filterEmployees = ({ employees, filterParams }: EmployeeFilterProps) => {
  const { name, office } = filterParams;

  return employees.filter(
    (employee) =>
      nameMatches(employee.name, name) && officeMatches(employee.office, office)
  );
};

type EmployeeListProps = {
  employees: Employee[];
};

export const EmployeeList: FC<EmployeeListProps> = ({ employees }) => {
  const [filteredEmployees, setFilteredEmployees] = useState(employees);
  const applyFilter = (filterParams: FilterParams) => {
    const filtered = filterEmployees({ employees, filterParams });
    setFilteredEmployees(filtered);
  };

  return (
    <>
      <EmployeeFilter setFilter={applyFilter} />
      <div className="employeeList">
        {filteredEmployees.map((employee) => (
          <EmployeeCard employee={employee} key={employee.email} />
        ))}
      </div>
    </>
  );
};
