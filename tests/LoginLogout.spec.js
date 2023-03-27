import { PageObjectMngr } from '../pageObjects/PageObjectMngr';
import { testscenario } from '../utils/testBase';

testscenario('Log-in and Logout', async ({ page, testData_Login }) => {
    const poManager = new PageObjectMngr(page);
    const loginlogoutPage = poManager.getLoginPage();
    await loginlogoutPage.goToURL();
    await loginlogoutPage.userLogin(testData_Login.username, testData_Login.password, testData_Login.accessKey);
});
