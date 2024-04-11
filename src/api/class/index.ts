import Cookies from "js-cookie";
import { Request } from "../request";

export const GetClass = async () => {
    const classData = await Request.get('/class')
    if (classData) {
        return classData;
    }
    return false;
}

export const GetPeopleClass = async () => {
    const classData = await Request.get('/class')
    if (classData) {
        return classData;
    }
    return false;
}