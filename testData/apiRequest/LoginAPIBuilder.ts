export class LoginAPIBuilder
{

  private payload:any = {

    email: "dipesh16pal@gmail.com",
    password: "Dipesh1234@"

  };

  setEmail(email:string)
  {
    this.payload.email = email;
    return this;
  }

  setPasword(pass:string)
  {
    this.payload.password = pass;
    return this;
  }


  build()
  {
    return structuredClone(this.payload);
  }



}