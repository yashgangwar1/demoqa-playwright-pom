import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class IFramePage extends BasePage {
  private iframeLocator = '#frame1';

  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await this.navigate('/nestedframes');
  }

  async getParentFrameText(): Promise<string> {
    const frame = this.page.frameLocator(this.iframeLocator);
    return await frame.locator('body').innerText();
  }

  async getChildFrameText(): Promise<string> {
    const parentFrame = this.page.frameLocator(this.iframeLocator);
    const childFrame = parentFrame.frameLocator('iframe');
    return await childFrame.locator('p').innerText();
  }
}