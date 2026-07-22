import { BrowserContext, expect, Locator, Page } from '@playwright/test';

export class ComponentPage {

    private page:Page;
    private dropdown:Locator;
    private openTabbtn:Locator;
    private openWindowbtn:Locator;

    constructor(page:Page)
    {
        this.page = page;
        this.dropdown = page.locator('#dropdown-class-example');
        this.openTabbtn = page.locator('#opentab');
        this.openWindowbtn = page.locator('#openwindow');
    }

    async selectFromDropdown(option:string)
    {
        await this.dropdown.selectOption(option);
        expect(this.dropdown).toHaveValue(option);
    }

    async switchTab()
    {
        const [newPage] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.openTabbtn.click()
        ])

        console.log(await newPage.title());
    }

    async switchWindow()
    {
        const [newPage] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.openWindowbtn.click()
        ])

        console.log(await newPage.title());
    }


}