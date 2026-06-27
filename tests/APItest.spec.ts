import { test, expect, request } from '@playwright/test';
import { API_BASE_URL } from '../utils/fetchenv';
import LoginAPI from '../testData/apiRequest/LoginAPI.json';
import CreateEventAPI from '../testData/apiRequest/CreateEventAPI.json';
import BookEventAPI from '../testData/apiRequest/BookEventAPI.json';
import { APIUtils } from '../utils/APIUtils';

test(`Event ticket book API test`, async () => {

    const apiUtils:APIUtils = new APIUtils();

    const apiContext = await request.newContext(
        {
            baseURL: API_BASE_URL
        });

    // Login API

    const token = await apiUtils.generateToken(apiContext,"auth/login",LoginAPI);
    console.log("Here is the Token: "+ token);

    // Added Token to the header

    const header = {
        "authorization": "Bearer "+token
    }

    // Event Creation API

    const EventAPIresponsePayload = await apiUtils.callPostAPI(apiContext,"events",CreateEventAPI,header)
    const eventid = await EventAPIresponsePayload.data.id;
    console.log(`Here is the event id ${eventid}`);
   
   // Book that event ticket

    BookEventAPI.eventId = eventid;

    const BookEventAPIresponsePayload = await apiUtils.callPostAPI(apiContext,"bookings",BookEventAPI,header)
    console.log(await BookEventAPIresponsePayload.message);

    // Delete that Event

    const pathParams:any[] = [eventid]; // create an array of all path parameters

    const deleteEventResponse = await apiUtils.callDeleteAPI(apiContext,"events",header,pathParams);
    console.log(await deleteEventResponse.message);


});