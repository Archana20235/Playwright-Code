import { test, expect } from '@playwright/test';
import { PageObjectMngr } from '../pageObjects/PageObjectMngr';
import { testscenario } from '../utils/testBase';

testscenario('LAN_UAT_ADM_WEB_Show correct trademark icon (INCOMPLETE)-539 @e2e', async ({ page, testData_Login }) => {
    const poManager = new PageObjectMngr(page);
    const loginlogoutPage = poManager.getLoginPage();

    let stepName = 'Prerequisites';
    await test.step(stepName, async () => {
        await loginlogoutPage.goToURL();
        await loginlogoutPage.userLogin(testData_Login.username, testData_Login.password, testData_Login.accessKey);
    });

    stepName = 'Step 2';
    await test.step(stepName, async () => {
        await expect(loginlogoutPage.page).toHaveTitle('LANEXO®');
    });
});
