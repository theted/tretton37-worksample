import { FC, ChangeEvent } from "react";
import "./EmployeeFilter.css";

const offices = [
  "All",
  "Lund",
  "Stockholm",
  "Helsingborg",
  "Borlänge",
  "Ljubljana",
];

type FilterParams = {
  name?: string;
  office?: string;
};

type EmployeeFilterProps = {
  setFilter: (filterParams: FilterParams) => void;
};

export const EmployeeFilter: FC<EmployeeFilterProps> = ({ setFilter }) => {
  const setOfficeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilter({ office: event.target.value });
  };

  const setNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter({ name: event.target.value });
  };

  return (
    <div className="employeeFilter">
      <div>
        <label htmlFor="office">Office</label>
        <select name="office" onChange={setOfficeHandler}>
          {offices.map((office) => (
            <option key={office} value={office}>
              {office}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" onChange={setNameHandler} />
      </div>
    </div>
  );
};
