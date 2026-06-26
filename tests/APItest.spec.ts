import { test, expect, request } from '@playwright/test';
import { API_BASE_URL } from '../utils/fetchenv';
import { ObjectManager } from '../pageObjects/ObjectManager';
import LoginAPI from '../testData/apiRequest/LoginAPI.json';
import CreateEventAPI from '../testData/apiRequest/CreateEventAPI.json';
import BookEventAPI from '../testData/apiRequest/BookEventAPI.json';

test(`Event ticket book API test`, async () => {

    const apiContext = await request.newContext(
        {
            baseURL: API_BASE_URL
        });

    // Login API

   const APIresponse = await apiContext.post("auth/login", {
        data: LoginAPI
    });

    const loginApiResponseBody =  await APIresponse.json();
    const token = await loginApiResponseBody.token;
    console.log("Here is the Token: "+ token);
    expect(APIresponse.ok()).toBeTruthy();

    // Added Token to the header

    const header = {
        "authorization": "Bearer "+token
    }

    // Event Creation API

    const EventAPIresponse = await apiContext.post("events", {
        data: CreateEventAPI,
        headers: header
    });
    
   const EventAPIresponsePayload = await EventAPIresponse.json();
   const eventid = await EventAPIresponsePayload.data.id;
   console.log(`Here is the event id ${eventid}`);
   expect(EventAPIresponse.ok()).toBeTruthy();

   // Book that event ticket

   BookEventAPI.eventId = eventid;
    const BookEventAPIresponse = await apiContext.post("bookings", {
        data: BookEventAPI,
        headers: header
    });

    const BookEventAPIresponsePayload = await BookEventAPIresponse.json();
    console.log(await BookEventAPIresponsePayload.message);
    expect(BookEventAPIresponse.ok()).toBeTruthy();
    
    // Delete that Event

    const deleteEventAPI = await apiContext.delete(`events/${eventid}`, {
        headers: header
    });

    const deleteEventResponse = await deleteEventAPI.json();
    console.log(await deleteEventResponse.message);
    expect(deleteEventAPI.ok()).toBeTruthy();

});