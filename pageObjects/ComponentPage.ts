import { expect, Locator, Page } from '@playwright/test';
import { commonUtils } from '../utils/commonUtils';

export class ComponentPage {

    private page:Page;
    private dropdown:Locator;
    private openTabbtn:Locator;
    private openWindowbtn:Locator;
    private radioButton:Locator;
    private utils:commonUtils;
    private mouseHoverbtn:Locator;
    private topLink:Locator;

    constructor(page:Page)
    {
        this.page = page;
        this.utils = new commonUtils();
        this.dropdown = page.locator('#dropdown-class-example');
        this.openTabbtn = page.locator('#opentab');
        this.openWindowbtn = page.locator('#openwindow');
        this.radioButton = page.locator('.radioButton');
        this.mouseHoverbtn = page.locator('#mousehover');
        this.topLink = page.getByRole('link', {name: "Top"});
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

    async clickRadioButton(radiobtn:number = 0)
    {
        await this.radioButton.nth(radiobtn).click();
        expect(await this.radioButton.nth(radiobtn).isChecked()).toBeTruthy();
    }

    async hoverMouseToButton()
    {
        await this.utils.scrollToElement(this.mouseHoverbtn);
        await this.mouseHoverbtn.hover();
        await this.topLink.click();
        expect(this.page).toHaveURL("https://rahulshettyacademy.com/AutomationPractice/#top");

    }



}