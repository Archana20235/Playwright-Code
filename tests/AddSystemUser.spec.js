import { PageObjectMngr } from '../pageObjects/PageObjectMngr';
import { testscenario } from '../utils/testBase';

testscenario('Add System User', async ({ page, testData_Login }) => {
    const poManager = new PageObjectMngr(page);
    const loginlogoutPage = poManager.getLoginPage();
    //console.log(process.env.userName);
    await loginlogoutPage.goToURL();
    await loginlogoutPage.userLogin(testData_Login.username, testData_Login.password, testData_Login.accessKey);
    const addsystemuser = poManager.getSystemUserDetails();
    await addsystemuser.clickonIntegrationManagement();
    await addsystemuser.fillSystemUserDetails();
});
