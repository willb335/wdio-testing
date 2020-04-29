import Base from '../Base';

class InsideNavbar extends Base {
  get accountActivityTab() {
    return $('#account_activity_tab');
  }
  get filtersLink() {
    return $('#tabs > ul > li:nth-child(2)');
  }
  get payBillsTab() {
    return $('#pay_bills_tab');
  }
  get payeeSelection() {
    return $('#sp_payee');
  }
  get accountSelection() {
    return $('#sp_account');
  }
  get amount() {
    return $('#sp_amount');
  }
  get date() {
    return $('#sp_date');
  }
  get description() {
    return $('#sp_description');
  }
  get paymentButton() {
    return $('#pay_saved_payees');
  }
  get alertContent() {
    return $('#alert_content');
  }

  clickPaymentButton() {
    this.paymentButton.waitForExist();
    this.paymentButton.click();
  }
  inputDescription(description) {
    this.description.waitForExist();
    this.description.setValue(description);
  }
  inputDate(date) {
    this.date.waitForExist();
    this.date.setValue(date);
  }
  inputAmount(amount) {
    this.amount.waitForExist();
    this.amount.setValue(amount);
  }
  selectAccount(account) {
    this.accountSelection.waitForExist();
    this.accountSelection.selectByVisibleText(account);
  }
  selectPayee(payee) {
    this.payeeSelection.waitForExist();
    this.payeeSelection.selectByAttribute('value', payee);
  }
  clickPayBillsTab() {
    this.payBillsTab.waitForExist();
    this.payBillsTab.click();
  }
  clickAccountActivityTab() {
    this.accountActivityTab.waitForExist();
    this.accountActivityTab.click();
  }
  clickFiltersLink() {
    this.filtersLink.waitForExist();
    this.filtersLink.click();
  }
}

export default new InsideNavbar();
