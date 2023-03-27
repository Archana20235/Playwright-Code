import { PageObjectMngr } from '../pageObjects/PageObjectMngr';
import { testscenario } from '../utils/testBase';

testscenario('Add Article Manually', async ({ page, testData_Login }) => {
    const poManager = new PageObjectMngr(page);
    const loginlogoutPage = poManager.getLoginPage();
    //console.log(process.env.userName);
    await loginlogoutPage.goToURL();
    await loginlogoutPage.userLogin(testData_Login.username, testData_Login.password, testData_Login.accessKey);
    const addArticleManually = poManager.getAddArticle();
    //await AddArticleManually.gotoaddArticleURL();
    // await addArticleManually.gotoaddArticleURL(TestDataforAddArticleManually.projectpageurl);
    await addArticleManually.clickonDataManagement();
    await addArticleManually.fillAddArticleDetails();
});
