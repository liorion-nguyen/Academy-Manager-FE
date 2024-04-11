import Cookies from "js-cookie";
import { Request } from "../request";

export const GetUsers = async () => {
    const users = await Request.get('/users')
    if (users) {
        return users;
    }
    return false;
}