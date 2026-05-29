import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class AlertsPage extends BasePage {
  private alertButton = '#alertButton';
  private timerAlertButton = '#timerAlertButton';
  private confirmButton = '#confirmButton';
  private promtButton = '#promtButton';
  private confirmResult = '#confirmResult';
  private promptResult = '#promptResult';

  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await this.navigate('/alerts');
  }

  async clickAlertButton() {
    await this.page.click(this.alertButton);
  }

  async acceptAlert() {
    this.page.once('dialog', async dialog => {
      await dialog.accept();
    });
  }

  async dismissConfirm() {
    this.page.once('dialog', async dialog => {
      await dialog.dismiss();
    });
    await this.page.click(this.confirmButton);
  }

  async acceptConfirm() {
    this.page.once('dialog', async dialog => {
      await dialog.accept();
    });
    await this.page.click(this.confirmButton);
  }

  async fillPrompt(text: string) {
    this.page.once('dialog', async dialog => {
      await dialog.accept(text);
    });
    await this.page.click(this.promtButton);
  }

  async getConfirmResult(): Promise<string> {
    return await this.page.locator(this.confirmResult).innerText();
  }

  async getPromptResult(): Promise<string> {
    return await this.page.locator(this.promptResult).innerText();
  }
}