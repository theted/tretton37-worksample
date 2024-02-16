import { useState, FC } from "react";
import { EmployeeCard } from "../EmployeeCard/EmployeeCard";
import { Employee } from "../../types/Employee";
import { EmployeeFilter } from "../EmployeeFilter/EmployeeFilter";
import "./EmployeeList.css";

type FilterParams = {
  name?: string;
  office?: string;
};

type EmployeeFilterProps = {
  employees: Employee[];
  filterParams: FilterParams;
};

const filterEmployees = ({ employees, filterParams }: EmployeeFilterProps) => {
  const { name, office } = filterParams;
  return employees.filter((employee) => {
    const isNameMatch = name
      ? employee.name.toLowerCase().includes(name.toLowerCase())
      : true;
    const isOfficeMatch =
      office && office !== "All" ? employee.office === office : true;

    return isNameMatch && isOfficeMatch;
  });
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
        {filteredEmployees.map((employee, id) => (
          <EmployeeCard employee={employee} key={id} />
        ))}
      </div>
    </>
  );
};
