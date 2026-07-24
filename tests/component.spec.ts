import { test } from '@playwright/test';
import { BASE_URL2 } from '../utils/fetchenv';
import { ObjectManager } from '../pageObjects/ObjectManager';
import { ComponentPage } from '../pageObjects/ComponentPage';

let objectManager:ObjectManager;
let componentPage:ComponentPage;

test.beforeEach('Browser Setup',async ({ page }) => {
  
    await page.goto(BASE_URL2);
    objectManager = new ObjectManager(page);
    componentPage = objectManager.getComponentPage();
})

test.skip('Test Select Dropdown', async () => {
  
    await componentPage.selectFromDropdown('option2');
    await componentPage.selectFromDropdown('option3');
    
})

test('Switch tab and fetch tab name of the new tab', async ({}) => {

    await componentPage.switchTab();

})

test('Switch window and fetch window name of the new tab', async ({}) => {

    await componentPage.switchWindow();

})

test('Click on Radio Button and validate selection', async ({}) => {

    await componentPage.clickRadioButton(2);

})

test.only('Hover mouse to button', async ({}) => {

    await componentPage.hoverMouseToButton();

})