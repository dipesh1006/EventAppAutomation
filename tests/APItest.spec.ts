import { test, expect, request } from '@playwright/test';
import { API_BASE_URL } from '../utils/fetchenv';
import { LoginAPIBuilder } from '../testData/apiRequest/LoginAPIBuilder';
import { CreateEventAPIBuider } from '../testData/apiRequest/CreateEventAPIBuider';
import { BookEventAPIBuilder } from '../testData/apiRequest/BookEventAPIBuilder';
import { APIUtils } from '../utils/APIUtils';
import { APIResource } from '../utils/APIResource';

test(`Event ticket book API test`, {tag: ['@API','@regression']} , async () => {

    const apiUtils:APIUtils = new APIUtils();

    const apiContext = await request.newContext(
        {
            baseURL: API_BASE_URL
        });

    // Login API return the header with token
    const LoginAPI = new LoginAPIBuilder().build();
    const header:any = await apiUtils.generateToken(apiContext,APIResource.LoginAPI,LoginAPI);

    // Event Creation API
    const CreateEventAPI = new CreateEventAPIBuider().build();
    const EventAPIresponsePayload = await apiUtils.callPostAPI(apiContext,APIResource.EventAPI,CreateEventAPI,header)
    const eventid = await EventAPIresponsePayload.data.id;
    console.log(`Here is the event id ${eventid}`);
   
   // Book that event ticket
    
    const BookEventAPI = new BookEventAPIBuilder().setEventid(eventid).build();

    const BookEventAPIresponsePayload = await apiUtils.callPostAPI(apiContext,APIResource.BookEventAPI,BookEventAPI,header)
    console.log(await BookEventAPIresponsePayload.message);

    // Delete that Event

    const pathParams:any[] = [eventid]; // create an array of all path parameters

    const deleteEventResponse = await apiUtils.callDeleteAPI(apiContext,APIResource.EventAPI,header,pathParams);
    console.log(await deleteEventResponse.message);


});