import { APIRequestContext, expect } from "@playwright/test";

export class APIUtils {

    
    async generateToken(apiContext:APIRequestContext, apiResource:string,requestPayload:any):Promise<string>
    {
        
        const APIresponse = await apiContext.post(apiResource, {
            data: requestPayload
        });
        expect(APIresponse.ok()).toBeTruthy();
        const loginApiResponseBody =  await APIresponse.json();
        const token = await loginApiResponseBody.token;
        return token;
    }


    async callPostAPI(apiContext:APIRequestContext, apiResource:string,requestPayload:any,header:any):Promise<any>
    {
        const APIresponse = await apiContext.post(apiResource, {
            data: requestPayload,
            headers: header
        });

        expect(APIresponse.ok()).toBeTruthy();
        const response = await APIresponse.json();
        return response;

    }


    async callDeleteAPI(apiContext:APIRequestContext, apiResource:string,header:any,pathParams?:any):Promise<any>
    {
        let APIwithAllPathparams:string = apiResource;

        if(pathParams!=undefined)
        {
            for(const pathParam of pathParams)
            {
                APIwithAllPathparams = APIwithAllPathparams +"/"+ pathParam;
            }
        }
        
        const deleteAPI = await apiContext.delete(APIwithAllPathparams, {
        headers: header
        });

        expect(deleteAPI.ok()).toBeTruthy();
        const response = await deleteAPI.json();
        return response;

    }

}