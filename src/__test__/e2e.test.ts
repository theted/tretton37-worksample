import { test, expect } from "vitest";
import { chromium, Browser, Page } from "playwright";

const URL = "http://localhost:8080";

const countEmployees = async (page: Page) => {
  return page.$$eval(".employeeCard", (cards) => cards.length);
};

test("Very basic E2E tests", async () => {
  const browser: Browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(URL);

  // expect employees are retreived from API and rendered
  await page.waitForSelector(".employeeList");
  const numEmployees = await countEmployees(page);
  expect(numEmployees).toBeGreaterThan(100);

  // expect selecting an office will decrease the number of employees displayed
  await page.selectOption('select[name="office"]', "Lund");
  const filteredEmployeeCount = await countEmployees(page);
  expect(filteredEmployeeCount).toBeLessThan(numEmployees);
  expect(filteredEmployeeCount).toBeGreaterThan(10);

  // expect the name filter to work
  // ! warning - will fail if employee would quit! ;)
  await page.type('input[name="name"]', "Amanda");
  const namedEmployeeCount = await countEmployees(page);
  expect(namedEmployeeCount).toBe(1);

  await browser.close();
});
