import { FC } from "react";
import type { Employee } from "../../types/Employee";
import "./EmployeeCard.css";

type SocialIconProps = {
  type: "gitHub" | "linkedIn" | "stackOverflow" | "twitter";
  href: string;
  alt: string;
};

const SocialIcon: FC<SocialIconProps> = ({ type, href, alt }) => (
  <a href={href}>
    <img
      src={`${type.toLowerCase()}.svg`}
      alt={`${alt} on ${type}`}
      className="icon"
    />
  </a>
);

type SocialProps = Pick<
  Employee,
  "name" | "gitHub" | "linkedIn" | "stackOverflow" | "twitter"
>;

const EmployeeSocial: FC<SocialProps> = ({
  name,
  gitHub,
  twitter,
  stackOverflow,
  linkedIn,
}) => (
  <div className="social">
    {gitHub && (
      <SocialIcon
        type="gitHub"
        href={`https://github.com/${gitHub}`}
        alt={name}
      />
    )}
    {linkedIn && (
      <SocialIcon
        type="linkedIn"
        href={`https://www.linkedin.com${linkedIn}`}
        alt={name}
      />
    )}
    {twitter && (
      <SocialIcon
        type="twitter"
        href={`https://twitter.com/${twitter}`}
        alt={name}
      />
    )}
    {stackOverflow && (
      <SocialIcon
        type="stackOverflow"
        href={`https://stackoverflow.com/users/${stackOverflow}`}
        alt={name}
      />
    )}
  </div>
);

type EmployeeCardProps = {
  employee: Employee;
};

export const EmployeeCard: FC<EmployeeCardProps> = ({ employee }) => {
  const {
    name,
    imagePortraitUrl,
    office,
    gitHub,
    twitter,
    stackOverflow,
    linkedIn,
  } = employee;

  return (
    <div className="employeeCard">
      <img src={imagePortraitUrl || "no-image.jpg"} alt={name} />
      <div className="employeeInfo">
        <div className="stats">
          <h2>{name}</h2>
          <p>Office: {office}</p>
        </div>
        <div className="socialLinks">
          <EmployeeSocial
            {...{ name, gitHub, twitter, stackOverflow, linkedIn }}
          />
        </div>
      </div>
    </div>
  );
};
