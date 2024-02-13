const offices = [
  "All",
  "Lund",
  "Stockholm",
  "Helsingborg",
  "Borlänge",
  "Ljubljana",
];

export const EmployeeFilter = ({
  setFilter,
}: {
  setFilter: (filter: string) => void;
}) => {
  const setOfficeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };

  return (
    <div className="employeeFilter">
      <label htmlFor="office">Office</label>
      <select name="office" onChange={setOfficeHandler}>
        {offices.map((office) => (
          <option key={office} value={office}>
            {office}
          </option>
        ))}
      </select>
    </div>
  );
};
