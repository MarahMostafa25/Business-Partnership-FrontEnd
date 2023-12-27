import httpRequest from "../utils/HttpRequest";

export async function login(email,password){
    console.log(email,password);
    const result = await httpRequest("api/auth/login",'post',{email:email,password:password});
    console.log(email,password);
    console.log(result);
    return result;
}

  
export async function signUp(data){
    console.log(data);
    const result = await httpRequest("api/auth/signup",'post',data);
    return result;
}