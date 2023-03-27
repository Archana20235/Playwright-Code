import { PageObjectMngr } from '../pageObjects/PageObjectMngr';
import { testscenario } from '../utils/testBase';

testscenario('LAN_UAT_INT_WEB_Using the list of system users (Test Id 524)', async ({ page, testData_Login }) => {
    const poManager = new PageObjectMngr(page);
    const loginlogoutPage = poManager.getLoginPage();
    //console.log(process.env.userName);
    await loginlogoutPage.goToURL();
    await loginlogoutPage.userLogin(testData_Login.username, testData_Login.password, testData_Login.accessKey);
    const addSystemUser = poManager.getSystemUserDetails();
    await addSystemUser.clickonIntegrationManagement();
    const systemUserDashbord = poManager.getSystemUserDashbord();

    await systemUserDashbord.deactivateSystemUser();
});
