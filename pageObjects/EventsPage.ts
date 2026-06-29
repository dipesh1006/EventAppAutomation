import { expect, Locator, Page } from "@playwright/test";
import { commonUtils } from "../utils/commonUtils";

export class EventsPage {

    private page:Page;
    private utils:commonUtils;
    private browseEventLink:Locator;
    private eventCards:Locator;
    private eventNames:Locator;
    private submitBtn:Locator;

    constructor(page:Page)
    {
        this.page = page;
        this.utils = new commonUtils();
        this.browseEventLink = page.getByRole('link', { name: "Browse Events →"});
        this.eventCards = page.getByTestId("event-card");
        this.eventNames = this.eventCards.locator("div").locator("a h3");
        this.submitBtn = page.getByRole('link', {name: "Book Now"});
    }

    async navigateToEventlist()
    {
        await this.utils.clickOnElement(this.browseEventLink,"Browse Events");
    }

    async bookThisEvent(eventName: string)
    {
        await this.eventCards.last().waitFor();
        const index = await this.utils.searchByText(this.eventNames,eventName);
        await this.utils.clickOnElement(this.submitBtn.nth(index),"Submit Now");
    }


}