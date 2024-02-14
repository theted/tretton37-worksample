import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { EmployeeList } from "./EmployeeList";
import TEST_EMPLOYEES from "../../__test__/test-employees.json";

describe("EmployeeList", () => {
  test("should render correctly", () => {
    render(<EmployeeList employees={TEST_EMPLOYEES} />);
    expect(document.getElementsByClassName("employeeList").length).toBe(1);
    expect(document.getElementsByClassName("employeeCard").length).toBe(4);
  });

  test("Should filter employees by name correctly", () => {
    render(<EmployeeList employees={TEST_EMPLOYEES} />);

    const officeSelect = screen.getByRole("combobox");
    fireEvent.change(officeSelect, { target: { value: "Lund" } });

    expect(document.getElementsByClassName("employeeCard").length).toBe(2);
  });

  test("Should filter employees by name correctly", () => {
    render(<EmployeeList employees={TEST_EMPLOYEES} />);

    const nameInput = screen.getByRole("textbox");
    fireEvent.change(nameInput, { target: { value: "Lars" } });

    expect(document.getElementsByClassName("employeeCard").length).toBe(2);
  });

  test("should filter by both name and office", () => {
    render(<EmployeeList employees={TEST_EMPLOYEES} />);

    const officeSelect = screen.getByRole("combobox");
    const nameInput = screen.getByRole("textbox");

    fireEvent.change(officeSelect, { target: { value: "Lund" } });
    fireEvent.change(nameInput, { target: { value: "Lars" } });

    expect(document.getElementsByClassName("employeeCard").length).toBe(1);
  });
});
