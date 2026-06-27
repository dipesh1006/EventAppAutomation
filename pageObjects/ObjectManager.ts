import { Page } from "@playwright/test";
import { LoginPage } from '../pageObjects/LoginPage'

export class ObjectManager
{
    private loginPage:LoginPage;

    constructor(page:Page)
    {
        this.loginPage = new LoginPage(page);
    }

    getLoginPage():any
    {
        return this.loginPage;
    }

}