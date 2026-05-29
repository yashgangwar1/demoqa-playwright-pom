import { test, expect } from '@playwright/test';
import { AlertsPage } from '../pages/AlertsPage';
import { testData } from '../utils/testData';

test.describe('Alerts Tests', () => {

  test('should handle simple alert', async ({ page }) => {
    const alertsPage = new AlertsPage(page);
    await alertsPage.goto();
    alertsPage.acceptAlert();
    await alertsPage.clickAlertButton();
  });

  test('should accept confirm box', async ({ page }) => {
    const alertsPage = new AlertsPage(page);
    await alertsPage.goto();
    await alertsPage.acceptConfirm();
    const result = await alertsPage.getConfirmResult();
    expect(result).toContain('Ok');
  });

  test('should fill prompt box', async ({ page }) => {
    const alertsPage = new AlertsPage(page);
    await alertsPage.goto();
    await alertsPage.fillPrompt(testData.prompt.text);
    const result = await alertsPage.getPromptResult();
    expect(result).toContain(testData.prompt.text);
  });

});