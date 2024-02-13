import { EmployeeCard } from "../EmployeeCard/EmployeeCard";
import { Employee } from "../../types/Employee";

export const EmployeeList = ({ employees }: { employees: Employee[] }) => {
  return (
    <>
      <div className="employeeList">
        {employees.map((employee, id) => (
          <EmployeeCard employee={employee} key={id} />
        ))}
      </div>
    </>
  );
};
