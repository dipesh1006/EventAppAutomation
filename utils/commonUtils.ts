import {Locator, expect} from '@playwright/test'

export class commonUtils
{
    
    async fillinputfield(locator:Locator, value:string)
    {
        try{
            await locator.fill(value);
        }
        catch(error)
        {
            console.log(`Unable to work with ${locator} due to error: `+error)
        }
        
    }


    async clickOnElement(locator:Locator, buttonName:string)
    {
        try{
            await expect(locator).toBeVisible();
            await locator.click();
        }
        catch(error)
        {
            console.log(`Unable to work with ${locator}, button name ${buttonName} due to error: `+error)
        }
        
    }

    async validateText(locator:Locator, value:string)
    {
        await expect(locator).toHaveText(value);
        
    }

    async searchByText(locatorList:Locator, target:string):Promise<number>
    {
        let index:number = -1;
        for(let i =0; i< await locatorList.count();i++)
        {
            let value:string | null = await locatorList.nth(i).textContent()
            if(value === target)
            {
                index = i;
                break;
            }
            
        }
        return index;
    }


}