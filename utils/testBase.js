import { test } from '@playwright/test';

export const testscenario = test.extend({
    testData_Login: {
        username: 'AshwiniBasavaraju@gmail.com',
        password: 'Admin@1234',
        accessKey: '1111111111111111111111111111111111111111111111111111111111111111',
        baseurl: '/#usekey',
    },
});
export const logIntest = test.extend({
    testDataForLogin: {
        username: 'AshwiniBasavaraju@gmail.com',
        password: 'Admin@1234',
        accessKey: '1111111111111111111111111111111111111111111111111111111111111111',
    },
});

export const addArticleManuallyTest = test.extend({
    TestDataforAddArticleManually: {
        //const randomString = uuidv4().slice(-12);
        baseurl: '/#usekey',
        username: 'AshwiniBasavaraju@gmail.com',
        passwd: 'Admin@1234',
        accessKey: '1111111111111111111111111111111111111111111111111111111111111111',
        projectpageurl: '/administration/data-management',
    },
});

export const editArticleManuallyTest = test.extend({
    TestDataforEditArticleManually: {
        //const randomString = uuidv4().slice(-12);
        baseurl: '/#usekey',
        username: 'AshwiniBasavaraju@gmail.com',
        passwd: 'Admin@1234',
        accessKey: '1111111111111111111111111111111111111111111111111111111111111111',
        projectpageurl: '/administration/data-management',
    },
});

export const maintainingSystemUserManuallyTest = test.extend({
    TestDataforMaintainingSystemUserManually: {
        //const randomString = uuidv4().slice(-12);
        baseurl: '/#usekey',
        username: 'AshwiniBasavaraju@gmail.com',
        passwd: 'Admin@1234',
        accessKey: '1111111111111111111111111111111111111111111111111111111111111111',
        projectpageurl: '/integration',
    },
});

export const addsystemuser = test.extend({
    testDataForAddsyetemUser: {
        baseurl: '/#usekey',
        username: 'AshwiniBasavaraju@gmail.com',
        password: 'Admin@1234',
        accessKey: '1111111111111111111111111111111111111111111111111111111111111111',
    },
});
