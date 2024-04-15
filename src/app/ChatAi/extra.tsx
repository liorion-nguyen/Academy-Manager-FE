import Image from "next/image";
import { StyleInpSearch, StyleRowGap20 } from "../style-mui";
import { StyleColumnGap20, StyleColumnGap5, StyleDetailChat, StyleExtraAvater, StyleExtraContent, StyleExtraLi, StyleExtraName, StyleExtraTitle, StyleIconLogo, StyleNewChat, StyleRowGap10, StyleSearchChat } from "./style-mui";
import { useEffect, useState } from "react";
import { Request } from "@/api/request";
import { useDispatch, useSelector } from "react-redux";
import { Box, Skeleton } from "@mui/material";
import { MessageActions } from "@/redux/chat";
import EditNoteIcon from '@mui/icons-material/EditNote';

export default function ChatAiExtra() {
    const dispatch = useDispatch();
    const [boxChat, setBoxChat] = useState<any>(null);
    const user = useSelector((state: any) => state.user.data);
    const idBoxChat = useSelector((state: any) => state.message.choose);
    useEffect(() => {
        const fetchData = async (id: string) => {
            const dataInfo = await Request.get(`/message/box/${id}`);
            setBoxChat(dataInfo);
        }
        if (user) {
            fetchData(user.id);
        }
    }, [user, idBoxChat])

    const handleClick = async (id: string) => {
        dispatch(MessageActions.SetChoose(id));
    }

    const handleNewchat = () => {
        dispatch(MessageActions.SetChoose(""))
        
    }

    return (
        <StyleDetailChat>
            <StyleColumnGap20>
                <StyleExtraTitle>Đoạn chat</StyleExtraTitle>
                <StyleSearchChat className="search">
                    <img src="/Images/admin/icon_search.svg" />
                    <StyleInpSearch type="text" placeholder="Search..." />
                </StyleSearchChat>
                <ul>
                    {boxChat && Array.isArray(boxChat) && boxChat.length > 0 ? (
                        boxChat.map((box: any, index: number) => (
                            <StyleExtraLi key={index} onClick={() => handleClick(box)}
                                sx={{
                                    background: idBoxChat === box ? "#e5e3e3" : "",
                                    borderRadius: '8px'
                                }}
                            >
                                <StyleRowGap10>
                                    <StyleExtraAvater src="/Images/chat/logo-page/icon_logo.png" />
                                    <StyleColumnGap5>
                                        <StyleExtraName>ChatBox Ai {index + 1}</StyleExtraName>
                                        {/* <StyleExtraContent>You: {box.message} {box.time}</StyleExtraContent> */}
                                    </StyleColumnGap5>
                                </StyleRowGap10>
                            </StyleExtraLi>
                        ))
                    ) : (
                        Array.from({ length: 3 }).map((_, index) => (
                            <StyleExtraLi key={index}>
                                <StyleRowGap10>
                                    <Skeleton variant="circular" width={50} height={50} />
                                    <Skeleton width={300} height={50} />
                                </StyleRowGap10>
                            </StyleExtraLi>
                        ))
                    )}
                </ul>
            </StyleColumnGap20>
            <StyleNewChat onClick={handleNewchat}>
                <StyleRowGap10>
                    <StyleIconLogo src="/Images/chat/logo-page/icon_logo.png" />
                    <StyleExtraName>New chat</StyleExtraName>
                </StyleRowGap10>
                <EditNoteIcon />
            </StyleNewChat>
        </StyleDetailChat>
    );
}