export class EditArticlePage {
    constructor(page) {
        this.page = page;
        this.settingIcon = page.locator('[class="anticon anticon-caret-down"]');
        this.dataManagementTab = page.locator('//div[@class="setting-div"]//li[1]');
        this.articleBtn = page.locator('[id="addArticle"]');
        this.articleNumBox = page.locator('[id="articleNumber"]');
        this.articleImg = page.locator('[alt="ARTICLES"]');
    }

    async clickonDataManagement() {
        await this.settingIcon.click();
        await this.dataManagementTab.click();
        await this.articleImg.click();
    }

    async fillEditArticleDetails() {
        const articleBaseName = 'Test Article with consumable';
        const randomNumber = Math.random();

        const ArticalName = 'Test Article with consumable ';
        await this.page.getByTestId('ArticleSearchwrapper').fill(ArticalName);
        await this.page.getByRole('img', { name: 'search' }).locator('svg').click();
        await this.page.locator('table > tbody > tr').getByTitle(articleBaseName).click();

        await this.articleNumBox.click();
        await this.articleNumBox.clear();
        await this.articleNumBox.fill('1' + ' ' + randomNumber);

        await this.page.getByTestId('btnSave').click();
        await this.page.getByRole('textbox', { name: 'from reason' }).fill('Test');
        await this.page.getByTestId('submit').click();
    }
}
