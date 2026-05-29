import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class RadioButtonPage extends BasePage {
  private yesRadio = 'label[for="yesRadio"]';
  private impressiveRadio = 'label[for="impressiveRadio"]';
  private noRadio = 'label[for="noRadio"]';
  private successText = '.mt-3';

  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await this.navigate('/radio-button');
  }

  async selectYes() {
    await this.page.click(this.yesRadio);
  }

  async selectImpressive() {
    await this.page.click(this.impressiveRadio);
  }

  async getSuccessMessage(): Promise<string> {
    return await this.page.locator(this.successText).innerText();
  }

  async isNoRadioDisabled(): Promise<boolean> {
    return await this.page.locator('#noRadio').isDisabled();
  }
}