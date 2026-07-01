import {test as base} from '@playwright/test';

interface TestBookEvent
{
    customerName: string;
    userPass: string;
    customerEmail: string;
    customerPhone: string;
    eventDetails: {
        eventName: string;
        quantity: string;
    };
}


export const customtest = base.extend<{bookEventsData:TestBookEvent}>({

    bookEventsData: async ({},use) => {

        const data = {
            customerName: "Dipesh Pal",
            userPass: "Dipesh1234@",
            customerEmail: "dipesh16pal@gmail.com",
            customerPhone: "+91-9876543210",
            eventDetails: {
                eventName: "World Tech Summit",
                quantity: "4"
                }
    
            }
        await use(data);
    }

})