import { useState, useEffect } from "react";
import { getEmployees } from "./api";
import { EmployeeList } from "./components/EmployeeList/EmployeeList.tsx";
import { Spinner } from "./components/Spinner/Spinner.tsx";
import { shuffleArray } from "./helpers.ts";

function App() {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getEmployees()
      .then((data) => {
        setEmployees(shuffleArray(data));
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <h1>Tretton37 heroes</h1>
      {isLoading && <Spinner />}
      {!isLoading && !isError && <EmployeeList employees={employees} />}
      {isError && <div className="error">Error fetching employees...</div>}
      <div id="bg-mask"></div>
    </>
  );
}

export default App;
