export class BookEventAPIBuilder
{

    private payload:any = {

        eventId: 101,
        customerName: "Dipesh Pal",
        customerEmail: "dipesh16pal@gmail.com",
        customerPhone: "+91-9876543210",
        quantity: 4
    }

    setEventid(eventId:number)
    {
        this.payload.eventId = eventId;
        return this;

    }

    setcustomerName(customerName:string)
    {
        this.payload.customerName = customerName;
        return this;

    }

    setcustomerEmail(customerEmail:string)
    {
        this.payload.customerEmail = customerEmail;
        return this;

    }

    setcustomerPhone(customerPhone:string)
    {
        this.payload.customerPhone = customerPhone;
        return this;

    }

    setquantity(quantity:number)
    {
        this.payload.quantity = quantity;
        return this;

    }

    build()
    {
        return structuredClone(this.payload);
    }


}