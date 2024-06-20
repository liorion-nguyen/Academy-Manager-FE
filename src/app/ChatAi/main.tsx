import { useEffect, useState } from "react";
import ChatBox from "./theme";
import { checkLogin } from "@/api/readtime";
import { LinearProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { Request } from "@/api/request";

export default function ChatAiMain() {
    const [loading, setLoading] = useState(true);
    const [messages, setMessages] = useState<any[]>([]);
    const [author, setAuthor] = useState<any>(null);
    const [audiences, setAudiences] = useState<any>(null);
    const [basicinformation, setBasicinformation] = useState<any>();
    const userInfo = useSelector((state: any) => state.user.data);
    const BoxChat = useSelector((state: any) => state.message.choose);

    useEffect(() => {
        const fetchData = async () => {
            setAuthor({
                id: userInfo.id,
                name: userInfo.fullName,
                avt: userInfo.avatar,
            })
            const userIds = BoxChat.contactUser.map(async (user: any) => {
                if (user.userId === "liorionAi") {
                    const response = {
                        id: "liorionAi",
                        fullName: "ChatBox Ai Liorion",
                        avatar: null
                    }
                }
                else {
                    const response = await Request.get(`/BoxChat/informationUser/${user.userId}`);
                }
            });

            if (BoxChat.length !== 2) {
                setAudiences({
                    id: 'liorionAi',
                    name: BoxChat.name,
                    avt: BoxChat.avatar || '/Images/chat/logo-page/icon_logo.png',
                })
            }

            setBasicinformation({
                theme: BoxChat.theme,
                emotional: BoxChat.emotional,
                nickname: {
                    author: '',
                    audiences: '',
                }
            })
            const datafake = await Request.get(`/message/${BoxChat.id}`);

            setMessages([]);
            if (Array.isArray(datafake)) {
                datafake.forEach((item: any) => {
                    setMessages(prevMessages => [...prevMessages, {
                        id: item.id,
                        content: item.content,
                        createAt: item.createdAt,
                        emoji: item.emoji,
                        creator: item.userId === userInfo.id ? true : false,
                        reply: item.reply,
                        userId: item.userId
                    }]);
                });
            }
            setLoading(false);
        }
        if (BoxChat && userInfo) {
            fetchData();
        } else if (userInfo) {
            setMessages([]);
            setAuthor({
                id: userInfo.id,
                name: userInfo.fullName,
                avt: userInfo.avatar,
            })
            setAudiences({
                id: 'liorionAi',
                name: 'ChatBox AI',
                avt: '/Images/chat/logo-page/icon_logo.png',
            })
            setBasicinformation({
                theme: "radial-gradient(circle at center 75%, rgb(85, 208, 255) 0%, rgb(117, 151, 215) 33%, rgb(255, 159, 179) 66%, rgb(255, 159, 179) 99%)",
                emotional: "😮",
                nickname: {
                    author: '',
                    audiences: '',
                }
            })
            setLoading(false);
        }
    }, [BoxChat, userInfo])

    return loading ? <LinearProgress sx={{ width: "100%" }} /> : (
        <ChatBox
            messages={messages}
            author={author}
            audiences={audiences}
            basicinformation={basicinformation}
        />
    );

}