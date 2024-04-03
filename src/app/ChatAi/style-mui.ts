import { Avatar, Box, Button, Dialog, DialogContent, DialogTitle, Grid, Menu, Popover, TextareaAutosize } from '@mui/material';
import { styled as muiStyled } from '@mui/system';
import CallIcon from '@mui/icons-material/Call';
import SearchIcon from '@mui/icons-material/Search';
import { StyleBoxColumn, StyleBoxRow, StyleRowGap5 } from '../style-mui';

export const BoxContainerColMui = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}));

export const BoxMessageMui = muiStyled(BoxContainerColMui)(({ theme }) => ({
    margin: '120px 0 50px 120px',
    borderTopRightRadius: '10px',
    borderTopLeftRadius: '10px',
}));

export const FeatureMessMui = muiStyled(BoxContainerColMui)(({ theme }) => ({
    padding: '10px',
    width: '-webkit-fill-available',
    position: 'relative',
    background: "white"
}));

export const ContentMessageMui = muiStyled(BoxContainerColMui)(({ theme }) => ({
    height: '80%',
    overflowX: 'hidden',
    overflowY: 'auto',
    background: 'white',
    width: '-webkit-fill-available',
    padding: '40px 10px 10px 10px',
    gap: '10px',
}));

export const FullNameMui = muiStyled(BoxContainerColMui)(({ theme }) => ({
    fontSize: '15px',
    fontWeight: '600',
}));

export const UserActiveMui = muiStyled(BoxContainerColMui)(({ theme }) => ({
    fontSize: '13px',
    fontWeight: '400',
    color: 'grey'
}));

export const TitleMessageMui = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 'auto'
}));

export const StyleBtnHidden = muiStyled('button')(({ theme }) => ({
    border: '0',
    background: 'transparent'
}));

export const ListIconMessMui = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    width: 'auto',
    right: '0',
    gap: '10px',
    float: 'left'
}));

export const GridRoundTopMui = muiStyled(Grid)(({ theme }) => ({
    marginTop: '0',
    marginLeft: '0',
    alignItems: 'center',
    padding: '0 10px',
    '.MuiGrid-item': {
        paddingTop: '0',
        paddingLeft: '0',
        display: 'flex',
        alignItems: 'center',
    }
}));

export const StyleBoxTitleMess = muiStyled(Box)(({ theme }) => ({
    display: "flex",
    gap: '10px',
    width: '100%',
    justifyContent: 'space-between',
    padding: "0 20px",
    alignItems: 'center'
}));

export const GridRoundDownMui = muiStyled(Grid)(({ theme }) => ({
    marginTop: '0',
    marginLeft: '0',
    padding: '10px',
    alignItems: 'center',
    justifyContent: 'space-between',
    '.MuiGrid-item': {
        paddingTop: '0',
        paddingLeft: '0',
        display: 'flex',
        justifyContent: 'center',
    }
}));

export const TextareaAutosizeMui = muiStyled(TextareaAutosize)(({ theme }) => ({
    resize: 'none',
    lineHeight: '20px',
    width: 'calc(100% - 50px)',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    padding: "0 10px",
    fontSize: '16px'
}));

export const BoxInputMessMui = muiStyled(Box)(({ theme }) => ({
    width: 'calc(100% - 20px)',
    fontSize: '18px',
    padding: '10px',
    borderRadius: '30px',
    background: '#f0f2f5',
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}));



export const CallIconMui = muiStyled(CallIcon)(({ theme }) => ({
    fontSize: '25px',
    color: '#bcc0c4',
    padding: '2px',
    ':hover': {
        background: '#80808036',
        borderRadius: '50%',
    }
}));

export const ContentMessageRightMui = muiStyled(Box)(({ theme }) => ({
    color: '#898989ad',
    fontSize: '13px',
    maxWidth: '70%',
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
    position: 'relative',
}));

export const AvatarSizeMessMui = muiStyled(Avatar)(({ theme }) => ({
    width: '35px',
    height: '35px',
}));

export const OneMessageMui = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    width: '-webkit-fill-available',
    padding: '5px',
    alignItems: 'end !important',
    gap: '10px',
}));

export const MainContentMessMui = muiStyled('span')(({ theme }) => ({
    padding: '10px',
    borderRadius: '20px',
    maxWidth: '-webkit-fill-available',
    fontSize: '15px',
}));

export const NameMessageMui = muiStyled('p')(({ theme }) => ({
    fontSize: '11px',
    color: '#898989ad',
}));


export const IconEmojiMui = muiStyled('img')(({ theme }) => ({
    width: '32px',
    height: '32px',
    ':hover': {
        scale: '1.2',
        transition: 'all 0.3s'
    }
}));

export const BoxEmojiMui = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    background: '#fff',
    width: 'auto',
    padding: '8px',
    borderRadius: '30px',
    position: 'absolute',
    gap: '7px',
    top: '50%',
    transform: "translateY(-124%)",
}));

export const MenuEmoji = muiStyled(Menu)(({ theme }) => ({
    position: 'static',
    '.MuiList-root': {
        display: 'flex',
        gap: '10px',
        padding: '5px 10px'
    },
    '.MuiPaper-root': {
        borderRadius: '50px'
    },
    'li': {
        padding: "0 5px",
        ':hover': {
            background: 'transparent',
        }
    }
}));
export const ButtonEmoji = muiStyled(Button)(({ theme }) => ({
    minWidth: 'auto',
    ':hover': {
        background: 'transparent'
    }
}));

export const EmojiCount = muiStyled('img')(({ theme }) => ({
    width: '13px',
    height: '13px'
}));

export const VisuallyHiddenInput = muiStyled('input')(({ theme }) => ({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
}));

export const BoxCountEmoj = muiStyled(Box)(({ theme }) => ({
    background: '#8989892e',
    borderRadius: '30px',
    padding: '5px',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    bottom: '-13px',
}));

export const PopoverMui = muiStyled(Popover)(({ theme }) => ({
    '.MuiPaper-root': {
        borderRadius: '15px',
        marginTop: '-40px',
    }
}));

export const LineHrMui = muiStyled('hr')(({ theme }) => ({
    border: '0',
    background: '#80808070',
    height: '1px',
    width: 'calc(100% - 20px)',
    margin: '10px',
}));

export const MenuDetailMessMui = muiStyled(Menu)(({ theme }) => ({
    '.MuiPaper-elevation': {
        borderRadius: '15px',
        minWidth: '275px'
    },
    'li': {
        gap: '10px',
        borderRadius: '10px'
    },
    'ul': {
        padding: '8px',
    }
}));

export const ButtonIconMui = muiStyled(Button)(({ theme }) => ({
    'span': {
        marginLeft: '0',
        marginRight: '0',
    },
    minWidth: 'auto',
    padding: '0'
}));

export const DialogMui = muiStyled(Dialog)(({ theme }) => ({
    '.MuiPaper-root': {
        width: '400px'
    },
}));

export const BoxImgReplyMui = muiStyled(Box)(({ theme }) => ({
    width: '80px',
    height: '80px',
    backgroundSize: 'cover',
    borderRadius: '10px',
    opacity: 0.6,
}));

export const MainContentReplyMui = muiStyled(Box)(({ theme }) => ({
    background: '#c7c7c738',
    padding: '10px',
    borderRadius: '10px',
    maxHeight: '150px',
    overflow: 'hidden',
}));


export const BoxImgContentMui = muiStyled(Box)(({ theme }) => ({
    width: '100px',
    paddingBottom: '100%',
    backgroundSize: 'cover'
}));


export const BoxGifMui = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
}));

export const DialogTitleMui = muiStyled(DialogTitle)(({ theme }) => ({
    textAlign: 'center',
    fontSize: '25px',
    fontWeight: '600'
}));

export const DialogContentMui = muiStyled(DialogContent)(({ theme }) => ({
    borderTop: '1px solid #80808085',
    borderBottom: '1px solid #80808085',
    paddingTop: '20px !important',
    // width: 'calc(100% - 48px)',
    '.box-emoji': {
        padding: '0',
        boxShadow: 'none',
        maxWidth: '100%'
    },
    '.box-search-icon': {
        display: 'none'
    }
}));


export const BoxRemoveMui = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    background: '#c0c0c080',
    borderRadius: '10px',
    padding: '10px',
    height: 'fit-content',
    ':hover': {
        cursor: 'pointer',
        background: '#9b999980'
    }
}));

export const BoxCoverRMMui = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px',
    ':hover': {
        background: '#ececec70',
        borderRadius: '10px',
    }
}));


export const InputSearchMui = muiStyled('input')(({ theme }) => ({
    border: 'none',
    outline: 'none',
    background: 'transparent',
    width: '85%',
    fontSize: '16px',
    color: '#4c4a4ade',
}));

export const IconSearchMui = muiStyled(SearchIcon)(({ theme }) => ({
    marginLeft: '9px',
    color: '#4c4a4ade',
}));

export const BoxSearchMui = muiStyled(Box)(({ theme }) => ({
    width: 'calc(100% - 14px)',
    background: '#ebebeb78',
    padding: '10px',
    borderRadius: '30px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
}));
export const GifMui = muiStyled(Box)(({ theme }) => ({
    maxWidth: '300px',
    padding: '3px 7px',
    boxShadow: '#80808061 0 0 8px 5px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    bottom: '30px',
    right: '0',
    zIndex: '1000',
    background: '#fff',
}));

export const InputNicknameMui = muiStyled('input')(({ theme }) => ({
    width: '-webkit-fill-available',
    padding: '10px',
    height: '40px',
    borderRadius: '5px',
}));

export const BoxInpNicknameMui = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '10px',
    padding: '10px',
    borderRadius: '10px',
    ':hover': {
        background: '#b7b3b321',
        cursor: 'pointer',
    }
}));

export const GridThemeMui = muiStyled(Grid)(({ theme }) => ({
    padding: '8px',
    borderRadius: '10px',
    ':hover': {
        background: '#d7d7d7',
        cursor: 'pointer'
    }
}));

export const BoxThemeMui = muiStyled(Grid)(({ theme }) => ({
    width: '100%',
    paddingBottom: '100%',
    borderRadius: '50%',
}));

export const StyleSearchChat = muiStyled(StyleBoxRow)(({ theme }) => ({
    border: '1px solid #E5E5E5',
    borderRadius: '5px',
    alignItems: 'center',
    width: '100%',
    height: '50px',
    gap: '15px',
    paddingLeft: '15px'
}));

export const StyleDetailChat = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    background: "#FFFFFF",
    borderRadius: '20px 0 0 0',
    width: '100%',
    height: 'calc(100% - 168px)',
    padding: '30px 20px',
    boxShadow: "-4px 2px 6px 0px rgb(179 179 179 / 50%)",
    gap: "20px"
}));

export const StyleExtraName = muiStyled('p')(({ theme }) => ({
    fontSize: '16px',
    fontWeight: '550'
}));

export const StyleExtraContent = muiStyled('p')(({ theme }) => ({
    fontSize: '13px',
    fontWeight: '400',
    color: '#cecccc'
}));

export const StyleExtraTitle = muiStyled('h1')(({ theme }) => ({
    fontSize: '25px',
    fontWeight: '500',
    textAlign: 'center'
}));

export const StyleExtraAvater = muiStyled('img')(({ theme }) => ({
    width: '45px',
    height: '45px',
    borderRadius: '50%'
}));

export const StyleRowGap10 = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
}));

export const StyleColumnGap5 = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5px'
}));

export const StyleExtraLi = muiStyled('li')(({ theme }) => ({
    padding: '10px 3px',
    ':hover': {
        background: "#e5e3e3",
        borderRadius: '8px'
    }
}));