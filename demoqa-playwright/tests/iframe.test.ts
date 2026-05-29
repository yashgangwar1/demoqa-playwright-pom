import { test, expect } from '@playwright/test';
import { IFramePage } from '../pages/IFramePage';

test.describe('iFrame Tests', () => {

  test('should get parent frame text', async ({ page }) => {
    const iframePage = new IFramePage(page);
    await iframePage.goto();
    const text = await iframePage.getParentFrameText();
    expect(text).toContain('Parent frame');
  });

  test('should get child frame text', async ({ page }) => {
    const iframePage = new IFramePage(page);
    await iframePage.goto();
    const text = await iframePage.getChildFrameText();
    expect(text).toContain('Child Iframe');
  });

});