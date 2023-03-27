export class LoginLogoutPage {
    constructor(page) {
        this.page = page;
        this.email = page.locator('[data-testid="loginEmail"]');
        this.passwd = page.locator('[data-testid="loginPassword"]');
        this.submitButton = page.locator('[data-testid="loginSubmit"]');
        this.accessKey = page.locator('[data-testid="row-mode"]');
        this.KeySubmitBtn = page.locator('[data-testid="stagekey-submit"]');
    }

    async goToURL() {
        await this.page.goto('https://test.lanexo.com/#usekey');
    }

    async userLogin(username, password, accessKey) {
        await this.email.click();
        await this.email.fill(username);
        await this.passwd.click();
        await this.passwd.fill(password);
        await this.submitButton.click();
        //await page.waitFor(1000);
        await this.accessKey.fill(accessKey);
        await this.KeySubmitBtn.click();
    }
}
