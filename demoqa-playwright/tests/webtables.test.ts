import { test, expect } from '@playwright/test';
import { WebTablesPage } from '../pages/WebTablesPage';
import { testData } from '../utils/testData';

test.describe('Web Tables Tests', () => {

  test('should add a new record to the table', async ({ page }) => {
    const tablePage = new WebTablesPage(page);
    await tablePage.goto();
    await tablePage.clickAdd();
    await tablePage.fillRegistrationForm(
      testData.webTable.firstName,
      testData.webTable.lastName,
      testData.webTable.email,
      testData.webTable.age,
      testData.webTable.salary,
      testData.webTable.department
    );
    await tablePage.submitForm();
    await expect(page.getByText(testData.webTable.firstName)).toBeVisible();
  });

  test('should search for a record', async ({ page }) => {
    const tablePage = new WebTablesPage(page);
    await tablePage.goto();
    await tablePage.searchRecord('Cierra');
    await expect(page.getByText('Cierra')).toBeVisible();
  });

  test('should delete first record', async ({ page }) => {
    const tablePage = new WebTablesPage(page);
    await tablePage.goto();
    await tablePage.deleteFirstRecord();
  });

});