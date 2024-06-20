import Image from "next/image";
import { StyleInpSearch, StyleRowGap20 } from "../style-mui";
import { StyleColumnGap20, StyleColumnGap5, StyleDetailChat, StyleExtraAvater, StyleExtraContent, StyleExtraLi, StyleExtraName, StyleExtraTitle, StyleIconLogo, StyleNewChat, StyleRowGap10, StyleSearchChat } from "./style-mui";
import { useEffect, useState } from "react";
import { Request } from "@/api/request";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, CircularProgress, Menu, MenuItem, Skeleton } from "@mui/material";
import { MessageActions } from "@/redux/chat";
import EditNoteIcon from '@mui/icons-material/EditNote';

type UserData = {
    id: string;
    fullName: string;
    avatar: any;
};

export default function ChatAiExtra() {
    const dispatch = useDispatch();
    const [boxChat, setBoxChat] = useState<any>(null);
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [dataSearch, setDataSearch] = useState<UserData[]>([]);
    const user = useSelector((state: any) => state.user.data);
    const idBoxChat = useSelector((state: any) => state.message.choose);
    useEffect(() => {
        const fetchData = async (id: string) => {
            const dataInfo = await Request.get(`/BoxChat/user/${id}`);
            dataInfo.map((boxChat: any) => {
                if (boxChat.contactUser.length === 2) {
                    if (user.id == boxChat.contactUser[0].userId) {
                        boxChat.name = boxChat.contactUser[1].nickName;
                    } else {
                        boxChat.name = boxChat.contactUser[0].nickName;
                    }
                }
            })
            setBoxChat(dataInfo);
        }
        if (user) {
            fetchData(user.id);
        }
    }, [user, idBoxChat])

    const handleClick = async (box: any) => {
        dispatch(MessageActions.SetChoose(box));
    }

    const handleNewchat = () => {
        dispatch(MessageActions.SetChoose(null))
    }


    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchTerm(search);
        }, 400);

        return () => {
            clearTimeout(handler);
        };
    }, [search]);

    useEffect(() => {
        if (debouncedSearchTerm) {
            handleSearch(debouncedSearchTerm);
        }
    }, [debouncedSearchTerm]);

    const handleSearch = (content: string) => {
        const fetch = async () => {
            const data = await Request.get(`/users/search?page=1&show=10&search=${content}`);
            setDataSearch(data.data);
            setLoading(false);
        }
        if (content != "") {
            setLoading(true);
            fetch();
        }
    }

    const handleCheckBoxChat = (id: string) => {
        const fetch = async () => {
            const data = await Request.get(`/BoxChat/checkBox?id1=${user.id}&id2=${id}`);
            dispatch(MessageActions.SetChoose(data));
            setSearch('');
        }
        fetch();
    }
    
    return (
        <StyleDetailChat>
            <StyleColumnGap20>
                <StyleExtraTitle>Đoạn chat</StyleExtraTitle>
                <StyleSearchChat className="search">
                    <img src="/Images/admin/icon_search.svg" />
                    <StyleInpSearch type="text" placeholder="Search..." value={search} onChange={(e: any) => { setSearch(e.target.value); if (e.target.value == "") setDataSearch([]) }} />
                    {search &&
                        <Box
                            sx={{
                                background: "white",
                                position: 'absolute',
                                top: '120%',
                                width: '100%',
                                height: 'auto',
                                left: '0',
                                padding: '10px',
                                borderRadius: '0 0 20px 20px',
                                boxShadow: '0 5px 12px 5px #e2e2e2',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '20px'
                            }}
                        >
                            {
                                loading ? (
                                    <CircularProgress />
                                ) : (
                                    dataSearch && Array.isArray(dataSearch) && dataSearch.length > 0 ? (
                                        dataSearch.map((data: any, index: number) => (
                                            <StyleExtraLi key={index} onClick={() => handleCheckBoxChat(data.id)}>
                                                <StyleRowGap10>
                                                    <StyleExtraAvater src="/Images/chat/logo-page/icon_logo.png" />
                                                    <StyleColumnGap5>
                                                        <StyleExtraName>{data.fullName}</StyleExtraName>
                                                    </StyleColumnGap5>
                                                </StyleRowGap10>
                                            </StyleExtraLi>
                                        ))
                                    ) : (
                                        <p>No results were found!</p>
                                    )
                                )
                            }
                            <Button variant="outlined" onClick={() => setSearch("")}>Close</Button>
                        </Box>}
                </StyleSearchChat>
                <ul>
                    {boxChat && Array.isArray(boxChat) ? (
                        boxChat.map((box: any, index: number) => (
                            <StyleExtraLi key={index} onClick={() => handleClick(box)}
                                sx={{
                                    background: idBoxChat && idBoxChat.id === box.id ? "#e5e3e3" : "",
                                    borderRadius: '8px'
                                }}
                            >
                                <StyleRowGap10>
                                    <StyleExtraAvater src="/Images/chat/logo-page/icon_logo.png" />
                                    <StyleColumnGap5>
                                        <StyleExtraName>{box.name}</StyleExtraName>
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
            <StyleNewChat
                onClick={handleNewchat}
            >
                <StyleRowGap10>
                    <StyleIconLogo src="/Images/chat/logo-page/icon_logo.png" />
                    <StyleExtraName>New chat</StyleExtraName>
                </StyleRowGap10>
                <EditNoteIcon />
            </StyleNewChat>
        </StyleDetailChat>
    );
}