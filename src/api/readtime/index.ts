import Cookies from "js-cookie";
import { Request } from "../request";

export const checkLogin = async () => {
    const access = Cookies.get('academy_manager');
    if (!access) {
        return false;
    }
    const user = await Request.post('/auth/token', {access: access})
    if (user) {
        return user;
    }
    return false;
}