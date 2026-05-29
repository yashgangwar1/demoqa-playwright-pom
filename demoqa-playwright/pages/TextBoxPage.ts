import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class TextBoxPage extends BasePage {
  // Locators
  private fullNameInput = '#userName';
  private emailInput = '#userEmail';
  private currentAddressInput = '#currentAddress';
  private permanentAddressInput = '#permanentAddress';
  private submitButton = '#submit';
  private outputName = '#name';
  private outputEmail = '#email';
  private outputCurrentAddress = '#currentAddress.mb-1';
  private outputPermanentAddress = '#permanentAddress.mb-1';

  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await this.navigate('/text-box');
  }

  async fillForm(name: string, email: string, currentAddress: string, permanentAddress: string) {
    await this.page.fill(this.fullNameInput, name);
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.currentAddressInput, currentAddress);
    await this.page.fill(this.permanentAddressInput, permanentAddress);
  }

  async submitForm() {
    await this.page.locator(this.submitButton).scrollIntoViewIfNeeded();
    await this.page.click(this.submitButton);
  }

  async getOutputName(): Promise<string> {
    return await this.page.locator(this.outputName).innerText();
  }

  async getOutputEmail(): Promise<string> {
    return await this.page.locator(this.outputEmail).innerText();
  }
}