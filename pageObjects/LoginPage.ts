import { expect, Locator, Page } from '@playwright/test'
import { commonUtils } from '../utils/commonUtils';
export class LoginPage
{
    private page:Page;
    private useridfield:Locator;
    private passwordfield:Locator;
    private submitBtn:Locator;
    private errorBannerMsg:Locator;
    private utils:commonUtils;

    constructor(page:Page)
    {
        this.page = page;
        this.useridfield = page.getByPlaceholder('you@email.com');
        this.passwordfield = page.getByPlaceholder('••••••');
        this.submitBtn = page.getByRole("button",{name: "Sign In"});
        this.errorBannerMsg = page.locator('div p',{hasText: "Invalid"});
        this.utils = new commonUtils();
    }

    async loginToEventapp(username: string, password:string)
    {
       await this.utils.fillinputfield(this.useridfield,username);
       await this.utils.fillinputfield(this.passwordfield,password);
       await this.utils.clickOnElement(this.submitBtn,"Sign In");
    }

    async validateErrorMassage(msg:string)
    {
        await this.utils.validateText(this.errorBannerMsg, msg)
        
    }

}