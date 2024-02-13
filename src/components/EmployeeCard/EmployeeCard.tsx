import type { Employee } from "../../types/Employee";
import "./EmployeeCard.css";

export const EmployeeCard = ({
  employee: {
    name,
    imagePortraitUrl,
    office,
    gitHub,
    twitter,
    stackOverflow,
    linkedIn,
  },
}: {
  employee: Employee;
}) => {
  return (
    <div className="employeeCard">
      <img src={imagePortraitUrl || "no-image.jpg"} alt={name} />
      <h2>{name}</h2>
      <p>Office: {office}</p>

      <div className="social">
        {gitHub && <a href={`https://github.com/${gitHub}`}>GitHub</a>}
        {twitter && <a href={`https://twitter.com/${twitter}`}>Twitter</a>}
        {stackOverflow && (
          <a href={`https://stackoverflow.com/users/${stackOverflow}`}>
            Stack Overflow
          </a>
        )}
        {linkedIn && (
          <a href={`https://www.linkedin.com/${linkedIn}`}>LinkedIn</a>
        )}
      </div>
    </div>
  );
};
