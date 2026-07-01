import { test, expect } from '@playwright/test';
import { BASE_URL } from '../utils/fetchenv';
import { ObjectManager } from '../pageObjects/ObjectManager';
import { LoginPage } from '../pageObjects/LoginPage';
import { EventsPage } from '../pageObjects/EventsPage';
import { ConfirmationPage } from '../pageObjects/ConfirmationPage';
import {customtest} from '../fixtures/bookEventsData';

let objManager:ObjectManager;

customtest.beforeEach("Login to the Application", async ({page,bookEventsData})=> {

  await page.goto(BASE_URL);
  objManager = new ObjectManager(page);
  const loginPage:LoginPage = objManager.getLoginPage();
  await loginPage.loginToEventapp(bookEventsData.customerEmail,bookEventsData.userPass);

})

customtest("Book an Event", async ({bookEventsData})=> {

  const eventPage:EventsPage = objManager.getEventsPage();
  const confirmationPage:ConfirmationPage = objManager.getConfirmationPage();

  await eventPage.navigateToEventlist();
  await eventPage.bookThisEvent(bookEventsData.eventDetails.eventName);
  await confirmationPage.confirmEventTicket(
    bookEventsData.eventDetails.quantity,
    bookEventsData.customerName,
    bookEventsData.customerEmail,
    bookEventsData.customerPhone
  );

})
