import { test, expect } from '@playwright/test';
import { BASE_URL } from '../utils/fetchenv';
import { ObjectManager } from '../pageObjects/ObjectManager';
import logIn from '../testData/logIn.json';

const validCredential = logIn.validCredentials;
const invalidCredential = logIn.invalidCredentials;

validCredential.forEach((credential) => {
test(`Login with valid credentials for username ${credential.username}`, async ({page}) => {

  await page.goto(BASE_URL);
  const objmanager = new ObjectManager(page);
  const loginpage =  objmanager.getLoginPage();

  await loginpage.loginToEventapp(credential.username,credential.password);
  await expect(page).toHaveURL("https://eventhub.rahulshettyacademy.com/");

})
});

invalidCredential.forEach(cred => {

  test(`Login with invalid credentials for username ${cred.username}`, async ({page}) => {

  await page.goto(BASE_URL);
  const objmanager = new ObjectManager(page);
  const loginpage =  objmanager.getLoginPage();

  await loginpage.loginToEventapp(cred.username,cred.password);
  await loginpage.validateErrorMassage(cred.msg);
  await expect(page).not.toHaveURL("https://eventhub.rahulshettyacademy.com/");

})

})
