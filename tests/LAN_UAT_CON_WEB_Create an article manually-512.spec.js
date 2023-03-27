import { test, expect } from '@playwright/test';
import { PageObjectMngr } from '../pageObjects/PageObjectMngr';
import { v4 as uuidv4 } from 'uuid';
import { testscenario } from '../utils/testBase';

testscenario('LAN_UAT_CON_WEB_Create an article manually-512 @e2e', async ({ page, testData_Login }, testInfo) => {
    const poManager = new PageObjectMngr(page);
    const addArticleManually = poManager.getAddArticle();
    const articleBaseName = 'e2e Test Article';
    const randomString = uuidv4().slice(-12); // ⇨ e.g. 'cba70bcf9488'
    const searchedArticle = articleBaseName + ' ' + randomString;

    let stepName = 'Prerequisites';
    await test.step(stepName, async () => {
        const loginlogoutPage = poManager.getLoginPage();
        await loginlogoutPage.goToURL();
        await loginlogoutPage.userLogin(testData_Login.username, testData_Login.password, testData_Login.accessKey);

        await addArticleManually.clickOnDataManagement();
        await expect(addArticleManually.articleBtn).toBeVisible();
    });

    stepName = 'Step 2';
    await test.step(stepName, async () => {
        await addArticleManually.clickOnAddArticleManuallyButton();
        await expect(await addArticleManually.addArticleManuallyHeader).toBeVisible();
    });

    stepName = 'Step 3';
    await test.step(stepName, async () => {
        const supplier = 'Merck';
        const packageContent = '1';
        const packageContentUnit = 'milligram(mg)';
        const lifespan = '1';
        await addArticleManually.fillAddArticleDetails(
            articleBaseName,
            randomString,
            supplier,
            packageContent,
            packageContentUnit,
            lifespan,
        );
        await expect(addArticleManually.page.getByTestId('btnSave')).toBeEnabled();
    });

    stepName = 'Step 4';
    await test.step(stepName, async () => {
        const type = 'test Article';
        const category = 'test category';
        const subCategory = 'test subCategory';
        const minTemperature = '18';
        const maxTemperature = '22';
        await addArticleManually.fillNewArticleFields(type, category, subCategory, minTemperature, maxTemperature);
        await expect(addArticleManually.page.getByTestId('btnSave')).toBeEnabled();
    });

    stepName = 'Step 5';
    await test.step(stepName, async () => {
        const changeReason = 'Test';
        await addArticleManually.saveArticle();
        await addArticleManually.giveReasonForChanges(changeReason);
        await addArticleManually.searchForAddedArticle(articleBaseName, randomString);
        await addArticleManually.findArticles(searchedArticle);
        await expect(addArticleManually.locatorList).not.toHaveCount(0);
        const screenshot = await addArticleManually.page.screenshot();
        await testInfo.attach(`${testInfo.project.name} - ${testInfo.titlePath} - ${stepName}`, {
            body: screenshot,
            contentType: 'image/png',
        });
    });

    stepName = 'Step 6';
    await test.step(stepName, async () => {
        await addArticleManually.openAuditTrailModule(searchedArticle); //this function opens audit trail and searchs for the added article
        await addArticleManually.findArticles(searchedArticle); //includes getByText
        await expect(addArticleManually.locatorList).not.toHaveCount(0);
        const screenshot = await addArticleManually.page.screenshot();
        await testInfo.attach(`${testInfo.project.name} - ${testInfo.titlePath} - ${stepName}`, {
            body: screenshot,
            contentType: 'image/png',
        });
    });

    await page.close();
});
