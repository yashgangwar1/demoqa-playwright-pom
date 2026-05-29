import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckBoxPage extends BasePage {
  private expandAllButton = 'button[title="Expand all"]';
  private homeCheckbox = 'li.rct-node:first-child .rct-checkbox';
  private resultOutput = '.display-result';

  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await this.navigate('/checkbox');
  }

  async expandAll() {
    await this.page.click(this.expandAllButton);
  }

  async selectHomeCheckbox() {
    await this.page.click(this.homeCheckbox);
  }

  async getSelectedItems(): Promise<string[]> {
    const items = await this.page.locator(this.resultOutput).allInnerTexts();
    return items;
  }

  async isCheckboxSelected(label: string): Promise<boolean> {
    const checkbox = this.page.getByLabel(label);
    return await checkbox.isChecked();
  }
}