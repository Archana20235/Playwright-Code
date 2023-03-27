export class AddArticlePage {
    constructor(page) {
        this.page = page;
        this.settingIcon = page.locator('[class="anticon anticon-caret-down"]');
        this.dataManagementTab = page.locator('//div[@class="setting-div"]//li[1]');
        this.articleBtn = page.locator('[id="addArticle"]');
        this.articleNameBox = page.locator('[id="articleName"]');
        this.articleNumBox = page.locator('[id="articleNumber"]');
        this.supplierBox = page.locator('[id="supplier"]');
        this.packageContentBox = page.locator('[id="packageContent"]');
        this.articleImg = page.locator('[alt="ARTICLES"]');
        this.addArticleManuallyHeader = page.locator('[class="ant-modal-header"]');
        this.typeBox = page.locator('[id="articleType"]');
        this.categoryBox = page.locator('[id="category"]');
        this.subCategoryBox = page.locator('[id="subCategory"]');
        this.minTemperatureBox = page.locator('[class="errorDisplay"] [data-testid="celsiusValue"]').nth(0);
        this.maxTemperatureBox = page.locator('[class="errorDisplay"] [data-testid="celsiusValue"]').nth(1);
        this.locatorList = this.page.locator('table > tbody > tr');
    }

    async clickOnDataManagement() {
        await this.settingIcon.click();
        await this.dataManagementTab.click();
        await this.articleImg.click();
    }

    async clickOnAddArticleManuallyButton() {
        await this.articleBtn.click();
    }

    async fillAddArticleDetails(articleBaseName, randomString, supplier, packageContent, packageContentUnit, lifespan) {
        await this.articleNameBox.fill(articleBaseName + ' ' + randomString);
        await this.articleNumBox.fill('1' + ' ' + randomString);
        await this.supplierBox.fill(supplier);
        await this.packageContentBox.fill(packageContent);
        await this.page.getByTestId('open').locator('svg').click();
        await this.page.getByText(packageContentUnit).click();
        await this.page.locator('input[type="number"]').nth(1).fill(lifespan);
    }

    async giveReasonForChanges(changeReason) {
        await this.page.getByRole('textbox', { name: 'from reason' }).fill(changeReason);
        await this.page.getByTestId('submit').click();
    }

    async searchForAddedArticle(articleBaseName, randomString) {
        await this.page.getByTestId('ArticleSearchwrapper').fill(articleBaseName + ' ' + randomString);
        await this.page.getByRole('img', { name: 'search' }).locator('svg').click();
    }

    async fillNewArticleFields(type, category, subCategory, minTemperature, maxTemperature) {
        await this.typeBox.fill(type);
        await this.categoryBox.fill(category);
        await this.subCategoryBox.fill(subCategory);
        await this.minTemperatureBox.fill(minTemperature);
        await this.maxTemperatureBox.fill(maxTemperature);
    }

    async saveArticle() {
        await this.page.getByTestId('btnSave').click();
    }

    async openAuditTrailModule(randomString) {
        await this.page.goto('https://test.lanexo.com/audit/');
        await this.page.getByPlaceholder('Search Audit Trails').fill(randomString);
    }

    async findArticles(searchedArticle) {
        await this.locatorList.getByText(searchedArticle);
    }
}
