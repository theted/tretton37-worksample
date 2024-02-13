export interface Employee {
  name: string;
  email: string;
  phoneNumber: string;
  office: string;
  manager: string;
  orgUnit: string;
  mainText: string;
  gitHub: string | null;
  twitter: string | null;
  stackOverflow: string | null;
  linkedIn: string | null;
  imagePortraitUrl: string;
  imageWallOfLeetUrl: string;
  highlighted: boolean;
  published: boolean;
  primaryRole: string;
  secondaryRole: string | null;
  area: string;
}
