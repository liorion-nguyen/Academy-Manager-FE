import Cookies from "js-cookie";
import { Request } from "../request";

export const checkLogin = async () => {
    const access = Cookies.get('liorion');
    if (!access) {
        return false;
    }
console.log(access)
    const user = await Request.post('/auth/token', {access: access})
    if (user) {
        return true;
    }
return false;
}