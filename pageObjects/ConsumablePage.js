export class ConsumablePage {
    constructor(page) {
        this.page = page;
        this.consumableModule = page.locator('//div[contains(text(),"Consumables")]');
        this.articleName = page.locator('//div[contains(text(),"Sodium121")]');
        this.popupMsgForRed = page.locator('//div[@class="ant-popover-inner-content"]');
    }
    async navigetToConsumableModule() {
        await this.consumableModule.click();
    }
    async validateArticleInDashboard() {
        const artilename = await this.articleName.textContent();
        console.log(artilename);
    }
    async navigetToInsideArticle() {
        this.articleName.click();
    }
    async hoverOveronCercle() {
        await this.page.locator('//div[@class="css-45m1s2"]//*[local-name()="g"]/*[local-name()="text"]').hover();
    }
}
