export interface BoxMessage {
    messages: Message[];
    author: Contact;
    audiences: Contact;
    basicinformation: BasicInformation;
}

export interface Message {
    id?: string;
    content?: string,
    createAt?: string,
    reply?: {
        id: string,
        content: string,
    },
    emoji?: Emotional[],
    creator?: boolean,
}

export interface Contact {
    id: string,
    name: string,
    avt: string,
}

interface Emotional {
    creator?: boolean,
    type: string,
}

export interface Nickname {
    author: string,
    audiences: string,
}

interface BasicInformation {
    theme: string;
    emotional: string;
    nickname: Nickname;
}