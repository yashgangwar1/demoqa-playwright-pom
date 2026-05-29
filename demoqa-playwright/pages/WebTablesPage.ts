import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class WebTablesPage extends BasePage {
  private addButton = '#addNewRecordButton';
  private searchBox = '#searchBox';
  private firstNameInput = '#firstName';
  private lastNameInput = '#lastName';
  private emailInput = '#userEmail';
  private ageInput = '#age';
  private salaryInput = '#salary';
  private departmentInput = '#department';
  private submitButton = '#submit';
  private tableRows = '.rt-tr-group';
  private deleteButton = 'span[title="Delete"]';
  private editButton = 'span[title="Edit"]';

  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await this.navigate('/webtables');
  }

  async clickAdd() {
    await this.page.click(this.addButton);
  }

  async fillRegistrationForm(firstName: string, lastName: string, email: string, age: string, salary: string, department: string) {
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.fill(this.lastNameInput, lastName);
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.ageInput, age);
    await this.page.fill(this.salaryInput, salary);
    await this.page.fill(this.departmentInput, department);
  }

  async submitForm() {
    await this.page.click(this.submitButton);
  }

  async searchRecord(keyword: string) {
    await this.page.fill(this.searchBox, keyword);
  }

  async deleteFirstRecord() {
    await this.page.locator(this.deleteButton).first().click();
  }

  async getRowCount(): Promise<number> {
    const rows = await this.page.locator('.rt-tr-group').all();
    return rows.length;
  }
}