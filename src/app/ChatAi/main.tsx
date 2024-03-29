import ChatBox from "./theme";

export default function ChatAiMain() {
    const messages = [
        {
            id: '1',
            content: `Xin chào,<br> Mình là Chung rất vui được làm quen!`,
            createAt: '2023-09-11T08:15:07.754+00:00',
            emoji: [],
            creator: true,
        },
        {
            id: '2',
            content: 'Chào cậu, rất vui được làm quen',
            createAt: '2023-09-12T17:03:21.675+00:00',
            emoji: [],
            creator: false,
        },
        {
            id: '3',
            content: 'Oke!',
            createAt: '2023-08-24T15:28:44.406+00:00',
            emoji: [],
            creator: true,
        },
        {
            id: '4',
            content: `Xin chào,<br> Mình là Chung rất vui được làm quen!<br>Hello`,
            createAt: '2023-08-24T07:29:16.054+00:00',
            emoji: [],
            creator: true,
        },
        {
            id: '5',
            content: 'Chào cậu, rất vui được làm quen',
            createAt: '2023-09-08T04:22:54.755+00:00',
            reply: {
                id: '2',
                content: 'Chào cậu, rất vui được làm quen',
            },
            emoji: [],
            creator: false,
        },
        {
            id: '6',
            content: 'Oke!',
            createAt: '2023-09-08T04:23:54.755+00:00',
            reply: {
                id: '4',
                content: 'img: https://developers.giphy.com/branch/master/static/sdk-gifs-86e75507b9f1aafe3eecefc5e55e5f6e.gif',
            },
            emoji: [
                {
                    creator: true,
                    type: 'Love'
                },
                {
                    creator: false,
                    type: 'Haha'
                }
            ],
            creator: true,
        },
        {
            id: '7',
            content: `img: https://developers.giphy.com/branch/master/static/sdk-gifs-86e75507b9f1aafe3eecefc5e55e5f6e.gif`,
            createAt: '2023-09-11T08:15:07.754+00:00',
            emoji: [],
            creator: true,
        },
    ];

    const author = {
        id: '0',
        name: 'Quoc Chung',
        avt: 'URL_ảnh_đại_diện_tác_giả',
    };

    const audiences = {
        id: '1',
        name: 'Nguyen Van Duy',
        avt: 'https://s.net.vn/JpfO',
    };
    const basicinformation = {
        theme: "radial-gradient(circle at center 75%, rgb(85, 208, 255) 0%, rgb(117, 151, 215) 33%, rgb(255, 159, 179) 66%, rgb(255, 159, 179) 99%)",
        emotional: "😮",
        nickname: {
            author: '',
            audiences: 'Duy203',
        }
    }
    return (
        <ChatBox 
            messages={messages}
            author={author} 
            audiences={audiences}
            basicinformation={basicinformation}
        />
    )
}