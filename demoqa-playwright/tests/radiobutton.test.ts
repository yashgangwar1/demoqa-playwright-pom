import { test, expect } from '@playwright/test';
import { RadioButtonPage } from '../pages/RadioButtonPage';

test.describe('Radio Button Tests', () => {

  test('should select Yes radio button', async ({ page }) => {
    const radioPage = new RadioButtonPage(page);
    await radioPage.goto();
    await radioPage.selectYes();
    const message = await radioPage.getSuccessMessage();
    expect(message).toContain('Yes');
  });

  test('should select Impressive radio button', async ({ page }) => {
    const radioPage = new RadioButtonPage(page);
    await radioPage.goto();
    await radioPage.selectImpressive();
    const message = await radioPage.getSuccessMessage();
    expect(message).toContain('Impressive');
  });

  test('No radio button should be disabled', async ({ page }) => {
    const radioPage = new RadioButtonPage(page);
    await radioPage.goto();
    const isDisabled = await radioPage.isNoRadioDisabled();
    expect(isDisabled).toBe(true);
  });

});