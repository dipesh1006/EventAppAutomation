import { Page } from "@playwright/test";
import { LoginPage } from '../pageObjects/LoginPage';
import { EventsPage } from '../pageObjects/EventsPage';
import { ConfirmationPage } from "./ConfirmationPage";

export class ObjectManager
{
    private loginPage:LoginPage;
    private eventsPage:EventsPage;
    private confirmPage:ConfirmationPage;

    constructor(page:Page)
    {
        this.loginPage = new LoginPage(page);
        this.eventsPage = new EventsPage(page);
        this.confirmPage = new ConfirmationPage(page);
    }

    getLoginPage():LoginPage
    {
        return this.loginPage;
    }

    getEventsPage():EventsPage
    {
        return this.eventsPage;
    }

    getConfirmationPage():ConfirmationPage
    {
        return this.confirmPage;
    }


}