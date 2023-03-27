// const { test, expect } = require('@playwright/test');
import { expect } from '@playwright/test';
import { PageObjectMngr } from '../pageObjects/PageObjectMngr';
import { testscenario } from '../utils/testBase';
import { UserManagementPage } from '../pageObjects/UserManagementPage';

testscenario(
    'Validate the user access cards can be seen in a column next to each user',
    async ({ page, testData_Login }) => {
        const poManager = new PageObjectMngr(page);
        const loginlogoutPage = poManager.getLoginPage();

        await loginlogoutPage.goToURL();
        await loginlogoutPage.userLogin(testData_Login.username, testData_Login.password, testData_Login.accessKey);
        const Accesscarddetail = poManager.getAccessCardDetail();
        await Accesscarddetail.navigateToUserManagement();
        await Accesscarddetail.checkAccessCardDetailOnDashboardColoum();

        expect(UserManagementPage.accessCardNumber).toBeVisible;
    },
);

testscenario('Validate the user access cards can be seen in user profile', async ({ page, testData_Login }) => {
    const poManager = new PageObjectMngr(page);
    const loginlogoutPage = poManager.getLoginPage();
    await loginlogoutPage.goToURL();
    await loginlogoutPage.userLogin(testData_Login.username, testData_Login.password, testData_Login.accessKey);
    const Accesscarddetail = poManager.getAccessCardDetail();
    await Accesscarddetail.navigateToUserManagement();
    await Accesscarddetail.checkAccessCardDetailOnDashboardColoum();
    await Accesscarddetail.accessCardOnUserProfile();

    expect(UserManagementPage.accesscardUserprofile).toBeVisible;
});
