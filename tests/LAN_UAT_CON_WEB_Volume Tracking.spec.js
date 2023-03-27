import { expect } from '@playwright/test';
import { PageObjectMngr } from '../pageObjects/PageObjectMngr';
import { testscenario } from '../utils/testBase';

testscenario('Validation list of consumables', async ({ page, testData_Login }) => {
    const poManager = new PageObjectMngr(page);
    const loginlogoutPage = poManager.getLoginPage();
    await loginlogoutPage.goToURL();
    await loginlogoutPage.userLogin(testData_Login.username, testData_Login.password, testData_Login.accessKey);
    const consumanlesPage = poManager.getConsumanlesDetail();
    await consumanlesPage.navigetToConsumableModule();
    await expect(consumanlesPage.page).toHaveURL('https://test.lanexo.com/consumables/');
    await consumanlesPage.validateArticleInDashboard();
    await expect(consumanlesPage.artilename).toBeVisible;
});

testscenario('Validation Red Exclamation mark in remaining level of content ', async ({ page, testData_Login }) => {
    const poManager = new PageObjectMngr(page);
    const loginlogoutPage = poManager.getLoginPage();
    await loginlogoutPage.goToURL();
    await loginlogoutPage.userLogin(testData_Login.username, testData_Login.password, testData_Login.accessKey);
    const consumanlesPage = poManager.getConsumanlesDetail();
    await consumanlesPage.navigetToConsumableModule();
    await expect(consumanlesPage.page).toHaveURL('https://test.lanexo.com/consumables/');
    await consumanlesPage.validateArticleInDashboard();
    await consumanlesPage.navigetToInsideArticle();
    await consumanlesPage.hoverOveronCercle();
    await expect(consumanlesPage.popupMsgForRed).toContainText('Unit does not match with article unit');
});
