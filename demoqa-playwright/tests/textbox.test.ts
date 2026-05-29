import { test, expect } from '@playwright/test';
import { TextBoxPage } from '../pages/TextBoxPage';
import { testData } from '../utils/testData';

test.describe('Text Box Tests', () => {

  test('should fill and submit text box form successfully', async ({ page }) => {
    const textBoxPage = new TextBoxPage(page);
    await textBoxPage.goto();
    await textBoxPage.fillForm(
      testData.textBox.fullName,
      testData.textBox.email,
      testData.textBox.currentAddress,
      testData.textBox.permanentAddress
    );
    await textBoxPage.submitForm();
    const outputName = await textBoxPage.getOutputName();
    expect(outputName).toContain(testData.textBox.fullName);
  });

  test('should show error for invalid email', async ({ page }) => {
    const textBoxPage = new TextBoxPage(page);
    await textBoxPage.goto();
    await textBoxPage.fillForm('Yash', 'invalidemail', 'Address', 'Address');
    await textBoxPage.submitForm();
    const emailField = page.locator('#userEmail');
    await expect(emailField).toHaveClass(/field-error/);
  });

});