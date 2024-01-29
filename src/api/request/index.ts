import axios from "axios";

export class Request {
    private static url: string = process.env.DOMAIN;

    static async get (param: string){
        const res = await axios.get(`${this.url}${param}`);
        if(res.status < 400){   
            return res.data;
        }
        throw new Error('Fetch failed');
     }
     static async post (param: string, data: any){
        try {
            const res = await axios.post(`${this.url}${param}`, data);
            if(res.status < 400){   
                return res.data;
            }
        } catch (error) {
            
            return false
        }
     }
}
