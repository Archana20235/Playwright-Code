import { PageObjectMngr } from '../pageObjects/PageObjectMngr';
import { testscenario } from '../utils/testBase';

testscenario('Maintaining System User Manually', async ({ page, testData_Login }) => {
    const poManager = new PageObjectMngr(page);
    const loginlogoutPage = poManager.getLoginPage();
    await loginlogoutPage.goToURL();
    await loginlogoutPage.userLogin(testData_Login.username, testData_Login.password, testData_Login.accessKey);
    const maintainingSystemUserManually = poManager.getMaintain();
    await maintainingSystemUserManually.clickonAdministration();
    await maintainingSystemUserManually.clickonIntegrationManagement();
});
