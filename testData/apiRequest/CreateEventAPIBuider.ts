export class CreateEventAPIBuider
{
    private payload:any = {

        title: "Tech Summit 2026",
        description: "A premier technology conference.",
        category: "Conference",
        venue: "Newtown conference Centre",
        city: "Kolkata",
        eventDate: "2026-09-15T09:00:00.000Z",
        price: 1000,
        totalSeats: 150,
        imageUrl: ""

    }


    setTitle(title:string)
    {
        this.payload.title = title;
        return this;
    }

    setdescription(description:string)
    {
        this.payload.description = description;
        return this;
    }

    setcategory(category:string)
    {
        this.payload.category = category;
        return this;
    }

    setvenue(venue:string)
    {
        this.payload.venue = venue;
        return this;
    }

    seteventDate(eventDate:string)
    {
        this.payload.eventDate = eventDate;
        return this;
    }

    setprice(price:string)
    {
        this.payload.price = price;
        return this;
    }

    setcity(city:string)
    {
        this.payload.city = city;
        return this;
    }

    settotalSeats(totalSeats:string)
    {
        this.payload.totalSeats = totalSeats;
        return this;
    }

    setimageUrl(imageUrl:string)
    {
        this.payload.imageUrl = imageUrl;
        return this;
    }

    build()
    {
        return structuredClone(this.payload);
    }


}