"use client"
import { Avatar, Box, Button, Grid, MenuItem } from "@mui/material";
import { AvatarSizeMessMui, BoxCountEmoj, BoxImgContentMui, BoxImgReplyMui, BoxInputMessMui, BoxMessageMui, ButtonEmoji, ContentMessageMui, ContentMessageRightMui, DialogMui, EmojiCount, FeatureMessMui, FullNameMui, GridRoundDownMui, GridRoundTopMui, IconEmojiMui, LineHrMui, ListIconMessMui, MainContentMessMui, MainContentReplyMui, MenuDetailMessMui, MenuEmoji, NameMessageMui, OneMessageMui, PopoverMui, StyleBoxTitleMess, StyleBtnHidden, TextareaAutosizeMui, TitleMessageMui, UserActiveMui, VisuallyHiddenInput } from "./style-mui";
import SendIcon from '@mui/icons-material/Send';
import { Fragment, useEffect, useRef, useState } from "react";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ImageIcon from '@mui/icons-material/Image';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import CallIcon from '@mui/icons-material/Call';
import VideocamIcon from '@mui/icons-material/Videocam';
import ClearIcon from '@mui/icons-material/Clear';
import ReplyIcon from '@mui/icons-material/Reply';
import { BoxMessage, Message } from "./schema/index";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { v4 as uuidv4 } from 'uuid';

import { useDispatch, useSelector } from "react-redux";
import SendMessageIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ProfileIcon from '@mui/icons-material/AccountCircleOutlined';
import RenameIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import NotificationIcon from '@mui/icons-material/NotificationsNoneOutlined';
import BlockIcon from '@mui/icons-material/PersonOffOutlined';
import LimitIcon from '@mui/icons-material/CommentsDisabledOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ReportIcon from '@mui/icons-material/ReportProblemOutlined';
import TopicIcon from '@mui/icons-material/WhatshotOutlined';
import ThemeMessage from "../../components/ChatAi/theme.message";
import EmotionalMessage from "../../components/ChatAi/emotional.message";
import NickName from "../../components/ChatAi/nickname.message";
import Gif from "../../components/ChatAi/gif.message";
import { MessageActions } from "@/redux/chat/chat";
import Icon from "../../components/ChatAi/icon.message";
import { StyleBoxColumn, StyleRowGap20, StyleRowGap5 } from "../style-mui";

export default function ChatBox(props: BoxMessage) {

    const { messages, author, audiences, basicinformation } = props;

    const [listMessages, setListMessages] = useState(messages);
    const feeling = [{ name: "Like", src: '/Images/chat/emoji/like.png' }, { name: "Love", src: '/Images/chat/emoji/love.png' }, { name: "Haha", src: '/Images/chat/emoji/haha.png' }, { name: "Wow", src: '/Images/chat/emoji/wow.png' }, { name: "Sad", src: '/Images/chat/emoji/sad.png' },];

    const dispatch = useDispatch();
    const [inpMess, setInpMess] = useState(false);
    const [checkBoxClick, setCheckBoxClick] = useState(true);
    const [valueMess, setValueMess] = useState('');
    const [reply, setReply] = useState<Message>();
    const [emoji, setEmoji] = useState(-1);
    const [openTheme, setOpenTheme] = useState(false);
    const [openNickName, setOpenNickName] = useState(false);
    const [openEmoji, setOpenEmoji] = useState(false);
    const inputRef = useRef<HTMLTextAreaElement | null>(null);
    const messageListRef = useRef<HTMLTextAreaElement | null>(null);
    const BoxMessageRef = useRef<HTMLTextAreaElement | null>(null);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [anchorElBoxGif, setAnchorElBoxGif] = useState<null | HTMLElement>(null);
    const [anchorElBoxDetail, setAnchorElBoxDetail] = useState<null | HTMLElement>(null);
    const [anchorElBoxIcon, setAnchorElBoxIcon] = useState<null | HTMLElement>(null);
    const [colorTheme, setColorTheme] = useState(1);
    const [theme, setTheme] = useState(basicinformation.theme);
    const open = Boolean(anchorEl);
    const inpicon = useSelector((state: any) => state.message.icon);
    const detail = useSelector((state: any) => state.message.detail);
    const gif = useSelector((state: any) => state.message.gif);
    const basicInformation = useSelector((state: any) => state.message.basicinformation);

    const handleBoxClick = () => {
        if (checkBoxClick) {
            setInpMess(true);
            setCheckBoxClick(false);
            inputRef.current?.focus();
        }
    }

    const handleReply = (message: object) => {
        inputRef.current?.focus();
        setReply(message)
    }

    const handleDeleteReply = () => {
        setReply({})
    }

    const handleClick = (event: React.MouseEvent<HTMLElement>, id: number) => {
        setEmoji(id);
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setEmoji(-1)
        setAnchorEl(null);
    };

    const handleClickOpenTheme = () => {
        dispatch(MessageActions.SetDetail('theme'));
        setOpenTheme(true);
    };

    const handleCloseTheme = () => {
        setOpenTheme(false);
    };

    const handleClickOpenNickName = () => {
        dispatch(MessageActions.SetDetail('nickname'));
        setOpenNickName(true);
    };

    const handleCloseNickName = () => {
        setOpenNickName(false);
    };

    const handleClickOpenEmoji = () => {
        dispatch(MessageActions.SetDetail('emoji'));
        setOpenEmoji(true);
    };

    const handleCloseEmoji = () => {
        setOpenEmoji(false);
    };

    const openBoxDetail = Boolean(anchorElBoxDetail);
    const handleClickBoxDetail = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElBoxDetail(event.currentTarget);
    };
    const handleCloseBoxDetail = () => {
        setAnchorElBoxDetail(null);
    };

    const openBoxGif = Boolean(anchorElBoxGif);
    const handleClickBoxGif = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElBoxGif(event.currentTarget);
    };
    const handleCloseBoxGif = () => {
        setAnchorElBoxGif(null);
    };

    const openBoxIcon = Boolean(anchorElBoxIcon);
    const handleClickBoxIcon = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElBoxIcon(event.currentTarget);
    };
    const handleCloseBoxIcon = () => {
        setAnchorElBoxIcon(null);
    };

    const formatDateTime = (inputDateTime: string) => {
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        };

        const formattedDateTime = new Date(inputDateTime).toLocaleDateString('en-US', options as Intl.DateTimeFormatOptions);

        return formattedDateTime;
    }

    const getLastRGBValue = (string: string): number[] => {
        const matches = string.match(/rgb\((\d+), (\d+), (\d+)\)/g);

        if (matches) {
            const lastMatch = matches[matches.length - 1];
            const match = lastMatch.match(/rgb\((\d+), (\d+), (\d+)\)/);

            if (match) {
                return [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])];
            }
        }

        throw new Error(`Could not extract last RGB value from string: ${string}`);
    }

    const getRGBColorsFromGradientString = (gradientString: string) => {
        const matches = gradientString.match(/rgb\((\d+), (\d+), (\d+)\)/g);

        if (matches) {
            const rgbColors = matches.map(match => {
                const values = match.match(/rgb\((\d+), (\d+), (\d+)\)/);
                if (values) {
                    return `rgb(${values[1]}, ${values[2]}, ${values[3]})`;
                }
                return null;
            }).filter(Boolean);

            return rgbColors;
        }
        return [];
    }

    const handleSend = (mess: string) => {
        const moment = require('moment-timezone');
        moment.tz.setDefault('Asia/Ho_Chi_Minh');
        const currentTimeInVietnam = moment().format('YYYY-MM-DDTHH:mm:ss.SSSZ');
        let messPush = {};

        if (reply && Object.keys(reply).length !== 0) {
            messPush = {
                id: uuidv4(),
                content: convertNewlinesToBreaks(mess),
                createAt: currentTimeInVietnam,
                reply: {
                    id: reply.id,
                    content: reply.content,
                },
                emoji: [],
                creator: true,
            }
        } else {
            messPush = {
                id: uuidv4(),
                content: convertNewlinesToBreaks(mess),
                createAt: currentTimeInVietnam,
                emoji: [],
                creator: true,
            }
        };


        const newListMessages = [...listMessages, messPush];

        setListMessages(newListMessages);
        setValueMess('');
        setReply({});
    };

    const convertNewlinesToBreaks = (text: string) => {
        const result = text.replace(/\n/g, '<br>');
        return result;
    }

    const handleSendIcon = () => {
        const moment = require('moment-timezone');
        moment.tz.setDefault('Asia/Ho_Chi_Minh');
        const currentTimeInVietnam = moment().format('YYYY-MM-DDTHH:mm:ss.SSSZ');
        const emoji_i = basicInformation.emoji === "" ? basicinformation.emotional : basicInformation.emoji;

        const newListMessages = [...listMessages, {
            id: uuidv4(),
            content: emoji_i,
            createAt: currentTimeInVietnam,
            emoji: [],
            creator: true,
        }];
        setListMessages(newListMessages);
    }

    const handlefeeling = (i: number, feelpush: any) => {
        const newListMessages = [...listMessages];

        const existingEmoji = newListMessages[i].emoji?.find(
            (emoji: any) => emoji.creator === feelpush.creator
        );

        if (existingEmoji) {
            existingEmoji.type = feelpush.type;
        } else {
            newListMessages[i].emoji?.push(feelpush);
        }

        setListMessages(newListMessages);
    };

    const extractImageUrl = (inputString: string) => {
        const matches = inputString.match(/https:\/\/[^ ]+/);
        if (matches && matches.length > 0) {
            return matches[0];
        } else {
            return "";
        }
    }

    useEffect(() => {
        if (inpicon) {
            const inp = valueMess + inpicon;
            setValueMess(inp);
            inputRef.current?.focus();
        }
    }, [inpicon, valueMess]);

    useEffect(() => {
        if (basicInformation.theme != "") setTheme(basicInformation.theme);

        const string = theme;
        const rgbValue = getLastRGBValue(string);
        const rgbColors = getRGBColorsFromGradientString(string);
        setColorTheme(rgbColors.length);
        rgbColors.map((rgb, index) => {
            document.documentElement.style.setProperty(`--theme-${index}`, rgb);
        })

        document.documentElement.style.setProperty('--theme', `rgb(${rgbValue[0]}, ${rgbValue[1]}, ${rgbValue[2]})`);
    }, [theme, basicInformation.theme]);

    useEffect(() => {
        if (messageListRef.current) {
            messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
        }
    }, [listMessages]);

    useEffect(() => {
        if (detail !== "theme") handleCloseTheme();
        if (detail !== "nickname") handleCloseNickName();
        if (detail !== "emoji") handleCloseEmoji();
    }, [detail])

    useEffect(() => {
        if (gif) {
            setAnchorElBoxGif(null);
            handleSend(`img: ${gif}`);
            dispatch(MessageActions.SetGif(''));
        }
    }, [gif])

    return (
        <BoxMessageMui onClick={handleBoxClick} ref={BoxMessageRef}>
            <FeatureMessMui>
                <StyleBoxTitleMess>
                    <StyleRowGap20>
                        <Avatar alt={audiences.name} src={audiences.avt} />
                        <StyleRowGap5 className="extendBox">
                            <TitleMessageMui>
                                <FullNameMui>{basicInformation.nickname.audiences || basicinformation.nickname.audiences || audiences.name}</FullNameMui>
                                <UserActiveMui>Is active</UserActiveMui>
                            </TitleMessageMui>
                            <StyleBtnHidden onClick={handleClickBoxDetail}>
                                <ExpandMoreIcon className={inpMess ? 'iconActive' : 'iconInactive'} />
                            </StyleBtnHidden>

                            <MenuDetailMessMui
                                id="basic-menu-BoxDetail"
                                anchorEl={anchorElBoxDetail}
                                open={openBoxDetail}
                                onClose={handleCloseBoxDetail}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                                sx={{ opacity: openTheme || openEmoji || openNickName ? '0' : '1' }}
                            >
                                <MenuItem onClick={handleCloseBoxDetail}>
                                    <SendMessageIcon />
                                    <p>Open in Messages</p>
                                </MenuItem>
                                <MenuItem onClick={handleCloseBoxDetail}>
                                    <ProfileIcon />
                                    <p>View personal page</p>
                                </MenuItem>
                                <LineHrMui />
                                <Box>
                                    <MenuItem onClick={() => { handleClickOpenTheme(); }}>
                                        <TopicIcon />
                                        <p>Change theme</p>
                                    </MenuItem>
                                    <DialogMui
                                        open={openTheme}
                                        onClose={handleCloseTheme}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <ThemeMessage theme={basicinformation.theme} />
                                    </DialogMui>
                                </Box>

                                <Box>
                                    <MenuItem onClick={() => { dispatch(MessageActions.SetFunction('Expressing emotions')); handleClickOpenEmoji(); }}>
                                        <SentimentSatisfiedAltIcon />
                                        <p>Expressing emotions</p>
                                    </MenuItem>
                                    <DialogMui
                                        open={openEmoji}
                                        onClose={handleCloseEmoji}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <EmotionalMessage emoji={basicinformation.emotional} />
                                    </DialogMui>
                                </Box>

                                <Box>
                                    <MenuItem onClick={() => { handleClickOpenNickName(); }}>
                                        <RenameIcon />
                                        <p>Nickname</p>
                                    </MenuItem>
                                    <DialogMui
                                        open={openNickName}
                                        onClose={handleCloseNickName}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <NickName nickname={(basicInformation.nickname.author || basicInformation.nickname.audiences) ? basicInformation.nickname : basicinformation.nickname} author={author} audiences={audiences} />
                                    </DialogMui>
                                </Box>
                                <LineHrMui />
                                <MenuItem onClick={handleCloseBoxDetail}>
                                    <NotificationIcon />
                                    <p>Turn off notifications</p>
                                </MenuItem>
                                <MenuItem onClick={handleCloseBoxDetail}>
                                    <BlockIcon />
                                    <p>Block</p>
                                </MenuItem>
                                <MenuItem onClick={handleCloseBoxDetail}>
                                    <LimitIcon />
                                    <p>Limit</p>
                                </MenuItem>
                                <LineHrMui />
                                <MenuItem onClick={handleCloseBoxDetail}>
                                    <DeleteIcon />
                                    <p>Delete chat</p>
                                </MenuItem>
                                <MenuItem onClick={handleCloseBoxDetail}>
                                    <ReportIcon />
                                    <p>Report</p>
                                </MenuItem>
                            </MenuDetailMessMui>
                        </StyleRowGap5>
                    </StyleRowGap20>
                    <ListIconMessMui>
                        <CallIcon className={inpMess ? 'iconActive' : 'iconInactive'} />
                        <VideocamIcon className={inpMess ? 'iconActive' : 'iconInactive'} />
                        <ClearIcon className={inpMess ? 'iconActive' : 'iconInactive'} />
                    </ListIconMessMui>
                </StyleBoxTitleMess>
            </FeatureMessMui>

            <ContentMessageMui ref={messageListRef}>
                {listMessages.map((message: any, index: number) => (
                    <OneMessageMui key={message.id} className={message.creator ? 'me' : 'you'}>
                        <AvatarSizeMessMui alt={audiences.name} src={audiences.avt} />
                        <Box className="main-right">
                            <ContentMessageRightMui className={message.creator ? 'me' : 'you'}>
                                <NameMessageMui className="nameAuthor">{basicInformation.nickname.audiences || basicinformation.nickname.audiences || audiences.name}</NameMessageMui>
                                {message.reply && <Box className="replyMessage">
                                    {
                                        message.reply.content.includes('img:') &&
                                        extractImageUrl(message.reply.content || "") && (
                                            <BoxImgReplyMui sx={{ backgroundImage: `url("${extractImageUrl(message.reply.content || "") || ""}") !important`, }}></BoxImgReplyMui>
                                        )
                                    }
                                    {
                                        !message.reply.content.includes('img:') && (
                                            <MainContentReplyMui> <p className="replyContent" dangerouslySetInnerHTML={{ __html: message.reply.content || "" }}></p> </MainContentReplyMui>

                                        )
                                    }
                                </Box>}
                                {
                                    message.content?.includes('img:') &&
                                    extractImageUrl(message.content || "") && (
                                        <BoxImgContentMui sx={{ backgroundImage: `url("${extractImageUrl(message.content || "") || ""}") !important`, }}></BoxImgContentMui>
                                    )
                                }
                                {
                                    !message.content?.includes('img:') && (
                                        <MainContentMessMui dangerouslySetInnerHTML={{ __html: message.content || "" }} className={`contentMessage theme${index % colorTheme}`}></MainContentMessMui>
                                    )
                                }

                                {(message.emoji?.length || 0) > 0 &&
                                    <BoxCountEmoj className="count-emoji">
                                        <p>{message.emoji?.length}</p>
                                        {message.emoji && message.emoji.map((typeEmoji: any, i: number) => (
                                            <Fragment key={i}>
                                                {typeEmoji.type === "Love" && <EmojiCount src='/Images/chat/emoji/love.png' alt="Love" />}
                                                {typeEmoji.type === "Like" && <EmojiCount src='/Images/chat/emoji/like.png' alt="Like" />}
                                                {typeEmoji.type === "Haha" && <EmojiCount src='/Images/chat/emoji/haha.png' alt="Haha" />}
                                                {typeEmoji.type === "Sad" && <EmojiCount src='/Images/chat/emoji/sad.png' alt="Sad" />}
                                                {typeEmoji.type === "Wow" && <EmojiCount src='/Images/chat/emoji/wow.png' alt="Wow" />}
                                            </Fragment>
                                        ))}
                                    </BoxCountEmoj>
                                }
                                <p className="details-time-message">{formatDateTime(message.createAt || "")}</p>
                            </ContentMessageRightMui>
                            <Box className="extension">
                                <ButtonEmoji className="extensionChird"
                                    onClick={(e: any) => handleClick(e, index)}
                                >
                                    <p className="details-extensionChird">Flying to oranges</p>
                                    <SentimentSatisfiedAltIcon className="iconInactive" />
                                </ButtonEmoji>
                                <MenuEmoji
                                    className="emoji"
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open && index === emoji}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    {feeling.map((feel, i) => (
                                        <IconEmojiMui
                                            key={i}
                                            src={feel.src}
                                            onClick={() => {
                                                handlefeeling(index, { creator: true, type: feel.name });
                                                handleClose();
                                            }}
                                        />
                                    ))}

                                </MenuEmoji>
                                <Box className="extensionChird">
                                    <p className="details-extensionChird">Reply</p>
                                    <ReplyIcon className="iconInactive" onClick={() => handleReply(message)} />
                                </Box>
                                <Box className="extensionChird">
                                    <p className="details-extensionChird">See more</p>
                                    <MoreVertIcon className="iconInactive" />
                                </Box>
                            </Box>
                        </Box>
                    </OneMessageMui>
                ))}
            </ContentMessageMui>

            <FeatureMessMui>
                {
                    reply &&
                    <Box className={Object.keys(reply).length !== 0 ? 'show-reply reply' : 'reply'}>
                        <Box className="replyTitle">
                            <p>Answering <b>{reply.creator ? 'self' : audiences.name}</b></p>
                            <ClearIcon className="iconInactive" onClick={handleDeleteReply} />
                        </Box>
                        {
                            reply.content?.includes('img:') &&
                            extractImageUrl(reply.content || "") && (
                                <BoxImgReplyMui sx={{ backgroundImage: `url("${extractImageUrl(reply.content || "") || ""}") !important` }}></BoxImgReplyMui>
                            )
                        }
                        {
                            !reply.content?.includes('img:') && (
                                <p className="replyContent" dangerouslySetInnerHTML={{ __html: reply.content || "" }}></p>
                            )
                        }
                    </Box>
                }
                <GridRoundDownMui container spacing={2}>
                    <Grid item xs={5} md={valueMess.length == 0 ? 2 : 1} className="p-10">
                        <ListIconMessMui>
                            <Button
                                sx={{
                                    'span': {
                                        marginLeft: '0',
                                        marginRight: '0',
                                    },
                                    minWidth: 'auto',
                                    padding: '0'
                                }}
                                component="label" startIcon={<AddCircleOutlineIcon className={inpMess ? 'iconActive' : 'iconInactive'} />}>
                            </Button>

                            {
                                valueMess.length == 0 && (
                                    <>
                                        <Button
                                            sx={{
                                                'span': {
                                                    marginLeft: '0',
                                                    marginRight: '0',
                                                },
                                                minWidth: 'auto',
                                                padding: '0'
                                            }}
                                            component='label' startIcon={<AttachFileIcon className={inpMess ? 'iconActive' : 'iconInactive'} />}>
                                            <VisuallyHiddenInput type="file" />
                                        </Button>
                                        <Button
                                            sx={{
                                                'span': {
                                                    marginLeft: '0',
                                                    marginRight: '0',
                                                },
                                                minWidth: 'auto',
                                                padding: '0'
                                            }}
                                            component="label" startIcon={<ImageIcon className={inpMess ? 'iconActive' : 'iconInactive'} />}>
                                            <VisuallyHiddenInput type="file" accept="image/*" onChange={(e: any) => {
                                                console.log(e.target.value);
                                            }} />
                                        </Button>
                                        <Box>
                                            <Box onClick={handleClickBoxGif}>
                                                <GifBoxOutlinedIcon className={inpMess ? 'iconActive' : 'iconInactive'} />
                                            </Box>
                                            <PopoverMui
                                                anchorEl={anchorElBoxGif}
                                                open={openBoxGif}
                                                onClose={handleCloseBoxGif}
                                            >
                                                <Gif />
                                            </PopoverMui>
                                        </Box>

                                    </>
                                )
                            }
                        </ListIconMessMui>
                    </Grid>
                    <Grid item xs={6} md={valueMess.length == 0 ? 9 : 10}>
                        <BoxInputMessMui>
                            <TextareaAutosizeMui
                                minRows={1}
                                maxRows={5}
                                placeholder="Aa"
                                value={valueMess}
                                ref={inputRef}
                                onFocus={() => setInpMess(true)}
                                onBlur={() => setInpMess(false)}
                                onChange={(e: any) => setValueMess(e.target.value)}
                            />
                            <Box>
                                <Box onClick={(e: any) => { dispatch(MessageActions.SetFunction('GetIcon')); handleClickBoxIcon(e) }}>
                                    <SentimentSatisfiedAltIcon className={inpMess ? 'iconActive' : 'iconInactive'} />
                                </Box>
                                <PopoverMui
                                    anchorEl={anchorElBoxIcon}
                                    open={openBoxIcon}
                                    onClose={handleCloseBoxIcon}
                                >
                                    <Icon />
                                </PopoverMui>
                            </Box>
                        </BoxInputMessMui>
                    </Grid>
                    <Grid item xs={1} md={0.5} className="p-10">
                        {
                            valueMess.length > 0 ? <SendIcon className='iconActive' onClick={() => { handleSend(valueMess) }} /> : <p style={{ fontSize: '28px', }} onClick={handleSendIcon}>{basicInformation.emoji || basicinformation.emotional}</p>
                        }
                    </Grid>
                </GridRoundDownMui>
            </FeatureMessMui>
        </BoxMessageMui >
    );
}