import { expect, Locator, Page } from "@playwright/test";
import { commonUtils } from "../utils/commonUtils";

export class ConfirmationPage
{
    private utils:commonUtils;
    private ticketCount:Locator;
    private customerName:Locator;
    private userEmail:Locator;
    private userPhone:Locator;
    private confirmButton:Locator;
    private addTicketBtn: Locator;

    constructor(page:Page)
    {
        this.utils = new commonUtils();
        this.ticketCount = page.locator("#ticket-count");
        this.customerName = page.getByPlaceholder("Your full name");
        this.userEmail = page.getByPlaceholder('you@email.com');
        this.userPhone = page.locator("#phone");
        this.confirmButton = page.getByRole("button",{name: "Confirm Booking"});
        this.addTicketBtn = page.getByRole("button",{name: "+"});

    }


    async addTicket(count:string)
    {

        for(let i=1;i<Number(count);i++)
        {
            await this.utils.clickOnElement(this.addTicketBtn,"Add ticket Button");
        }
    }

    async confirmEventTicket(count:string,bookingUserName:string,emailId:string,phNo:string)
    {
        await expect(this.confirmButton).toBeVisible();
        await this.addTicket(count);
        await this.utils.fillinputfield(this.customerName,bookingUserName);
        await this.utils.fillinputfield(this.userEmail,emailId);
        await this.utils.fillinputfield(this.userPhone,phNo);
        await this.utils.clickOnElement(this.confirmButton,"Confirm Button");
    }


}