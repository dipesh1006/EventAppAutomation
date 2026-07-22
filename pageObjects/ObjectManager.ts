import { Page } from "@playwright/test";
import { LoginPage } from '../pageObjects/LoginPage';
import { EventsPage } from '../pageObjects/EventsPage';
import { ConfirmationPage } from "./ConfirmationPage";
import { ComponentPage } from "./ComponentPage";

export class ObjectManager
{
    private loginPage:LoginPage;
    private eventsPage:EventsPage;
    private confirmPage:ConfirmationPage;
    private componentPage:ComponentPage;

    constructor(page:Page)
    {
        this.loginPage = new LoginPage(page);
        this.eventsPage = new EventsPage(page);
        this.confirmPage = new ConfirmationPage(page);
        this.componentPage = new ComponentPage(page);

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

    getComponentPage():ComponentPage
    {
        return this.componentPage;
    }

}