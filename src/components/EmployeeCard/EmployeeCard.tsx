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

const socialMediaUrls = {
  gitHub: (userID: string) => `https://github.com/${userID}`,
  linkedIn: (userID: string) => `https://www.linkedin.com${userID}`,
  twitter: (userID: string) => `https://twitter.com/${userID}`,
  stackOverflow: (userID: string) =>
    `https://stackoverflow.com/users/${userID}`,
};

const EmployeeSocial: FC<SocialProps> = (props) => (
  <div className="social">
    {Object.entries(socialMediaUrls).map(([type, urlBuilder]) => {
      const userID = props[type as keyof SocialProps];
      return (
        userID && (
          <SocialIcon
            key={type}
            type={type as "gitHub" | "linkedIn" | "stackOverflow" | "twitter"}
            href={urlBuilder(userID)}
            alt={props.name}
          />
        )
      );
    })}
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
