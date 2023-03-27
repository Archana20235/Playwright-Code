export class HomePage {
    constructor(page) {
        this.page = page;
        this.articleBtn = page.locator('[id="articleName"]');
    }

    async clickOnDataManagemet() {
        await this.articleBtn.click();
    }
}
