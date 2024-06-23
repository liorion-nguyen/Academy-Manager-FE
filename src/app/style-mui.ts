"use client"
import { Box, Grid, Link, Menu, Typography } from "@mui/material";
import { styled as muiStyled } from "@mui/system";

const mode = JSON.parse(localStorage.getItem('dark') || "false");
const bgDark = '#131314';
const bgDarkLight = '#1e1f20';
const bgBright = '#FFFFFF';
const bgBrightLight = '#FAFAFA';
const clDark = 'rgb(188,189,191,0.7)';
const clDark2 = 'rgb(188,189,191,0.8)';
const clDark3 = 'rgb(188,189,191,0.6)';
const clBright = 'rgb(35,50,85,0.7)';
const clBright2 = 'rgb(35,50,85,0.8)';
const clBright3 = 'rgb(35,50,85,0.6)';

export const StyleBoxRow = muiStyled(Box)(({ theme }) => ({
    display: "flex",
}));

export const StyleComponent = muiStyled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
    background: mode ? bgDarkLight : bgBrightLight,
    margin: '0'
}));

export const StyleBoxColumn = muiStyled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column"
}));

export const StyleGridLeft = muiStyled(Grid)(({ theme }) => ({
    background: mode ? bgDarkLight : bgBrightLight,
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '0 !important'
}));

export const StyleBoxUser = muiStyled(StyleBoxRow)(({ theme }) => ({
    background: mode ? bgDark : bgBright,
    borderRadius: '0 0 0 20px',
    width: '100%',
    height: '89px',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    border: "1px solid #80808021",
    gap: "15px"
}));

export const StyleGridUserNotification = muiStyled(Grid)(({ theme }) => ({
    width: '100%',
    height: "100vh",
    overflow: 'hidden',
    margin: '0 !important',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
        overflow: 'scroll'
    },
}));

export const StyleBoxNotification = muiStyled(Box)(({ theme }) => ({
    width: "34px",
    height: "34px"
}));

export const StyleImgLeft = muiStyled('img')(({ theme }) => ({
    width: "100%",
    height: "100%"
}));

export const StyleBoxAvatarUser = muiStyled(Box)(({ theme }) => ({
    width: "50px",
    height: "50px"
}));

export const StyleIconDown = muiStyled(Box)(({ theme }) => ({
    width: "20px",
    height: "20px"
}));

export const StyleBoxInBoxUser = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
}));

export const StyleNameUser = muiStyled('p')(({ theme }) => ({
    color: mode ? clDark2 : clBright2,
    fontSize: "14px",
    fontWeight: '500'
}));

export const StyleBoxUserDisplay = muiStyled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

export const StyleCalendarEvent = muiStyled(StyleBoxColumn)(({ theme }) => ({
    width: '100%',
    gap: "20px",
    height: "calc(100vh - 110px)",
    overflowY: 'auto',
    "&::-webkit-scrollbar-track": {
        background: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#d1cfcfc7",
    },
    "&::-webkit-scrollbar": {
        width: "5px",
    },
    ".MuiDateCalendar-root": {
        width: '100%',
        height: 'auto',
        maxHeight: '400px'
    },
    ".MuiTypography-root, .MuiButtonBase-root, .MuiPickersDay-root": {
        width: '40px',
        height: '40px'
    },
    ".MuiDayCalendar-monthContainer": {
        position: 'relative',
        marginBottom: '10px'
    },
    [theme.breakpoints.down('sm')]: {
        height: "auto",
    },
}));

export const StyleCalendar = muiStyled(StyleBoxColumn)(({ theme }) => ({
    borderRadius: '10px',
    border: "1px solid #80808021",
    gap: "20px",
    ".MuiDateCalendar-root": {
        background: mode ? bgDark : bgBright,
    },
    ".MuiTypography-root, .MuiButtonBase-root": {
        color: mode ? clDark : clBright,
    }
}));

export const StyleEvent = muiStyled(StyleBoxColumn)(({ theme }) => ({
    background: mode ? bgDark : bgBright,
    borderRadius: '10px 10px 0 0',
    border: "1px solid #80808021",
    padding: '20px',
    gap: "20px"
}));

export const StyleH3TitleEvent = muiStyled('p')(({ theme }) => ({
    color: mode ? clDark2 : clBright2,
    fontSize: '20px'
}));

export const StyleBoxButton = muiStyled(StyleBoxRow)(({ theme }) => ({
    gap: '10px',
}));

export const StyleNote = muiStyled(StyleBoxColumn)(({ color, theme }) => ({
    gap: '20px'
}));

export const StyleBoxNote = muiStyled(StyleBoxColumn)(({ color, theme }) => ({
    borderLeft: "4px solid #F6AD2B",
    background: `linear-gradient(to right, rgba(${color},0.66), rgba(${color},0.1))`,
    padding: '10px',
    gap: '10px'
}));

export const StyleTitleNote = muiStyled('p')(({ theme }) => ({
    color: '#657088',
    fontSize: '18px'
}));

export const StyleContentNote = muiStyled('p')(({ theme }) => ({
    color: 'rgb(35,50,85,0.5)',
    fontSize: '14px'
}));

export const StyleTimeNote = muiStyled('p')(({ theme }) => ({
    color: 'rgb(35,50,85,0.3)',
    fontSize: '13px',
    width: '100%',
    textAlign: 'end'
}));

export const StyleGridRight = muiStyled(Grid)(({ theme }) => ({
    borderRight: '1px solid rgb(127,189,228,0.3)',
    background: mode ? bgDark : bgBright,
    display: 'flex',
    flexDirection: 'column',
    paddingRight: '10px',
    width: '100%',
    position: 'relative',
    height: '-webkit-fill-available',
    [theme.breakpoints.down('sm')]: {
        padding: '0 !important',
    },
}));

export const StyleNavLeft = muiStyled(Box)(({ theme }) => ({
    background: "#233255",
    border: "1px solid #F6AD2B",
    width: '70px',
    position: 'fixed',
    left: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'center',
    padding: '40px 20px',
    zIndex: '1',
    [theme.breakpoints.down('sm')]: {
        top: '60px',
        height: '90vh',
        borderRadius: '0 0 50px 50px',
    },
    [theme.breakpoints.up('sm')]: {
        bottom: '40px',
        borderRadius: '50px 50px 0 0',
        height: '86vh',
    },
}));

export const StyleIconNavLeft = muiStyled(Box)(({ theme }) => ({
    width: '30px',
    height: '30px'
}));

export const StyleBoxIconNavLeft = muiStyled(StyleBoxColumn)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        gap: '20px',
    },
    [theme.breakpoints.up('sm')]: {
        gap: '30px',
    }
}));

export const StyleBoxHeader = muiStyled(StyleBoxColumn)(({ width, theme }) => ({
    position: 'fixed',
    width: `${Number(width)}px`,
    justifyContent: 'space-between',
    height: '110px',
    background: mode ? bgDark : bgBright,
    top: '0',
    left: '0',
    padding: '20px 20px 0 20px',
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    },
}));

export const StyleHeaderTop = muiStyled(StyleBoxRow)(({ theme }) => ({
    justifyContent: 'space-between',
}));

export const StyleTypographyPoint = muiStyled(Typography)(({ theme }) => ({
    color: "#F6AD2B",
    fontSize: '14px'
}));

export const StyleLinkPoint = muiStyled(Link)(({ theme }) => ({
    color: "rgb(35,50,85,0.5)",
    fontSize: '14px'
}));


export const StyleSearch = muiStyled(StyleBoxRow)(({ theme }) => ({
    position: 'absolute',
    right: '20px',
    bottom: '0',
    border:  `1px solid ${mode ? '#2f2f2fcc' : "#E5E5E5"}`,
    borderRadius: '5px',
    alignItems: 'center',
    width: '412px',
    height: '50px',
    gap: '15px',
    paddingLeft: '15px'
}));

export const StyleInpSearch = muiStyled('input')(({ theme }) => ({
    background: 'transparent',
    border: 'none',
    outline: 'none',
    fontSize: '16px',
    color: mode ? clDark2 : clBright2,
    "&::placeholder": {
        color: mode ? clDark2 : clBright2,
    }
}));

export const StyleDashboardCard = muiStyled(Grid)(({ theme }) => ({
    background: mode ? bgDark : bgBright,
    border: "1px solid #80808021",
    borderRadius: '20px',
    padding: '15px',
    display: 'flex',
    gap: '20px'
}));

export const StyleContent = muiStyled(StyleBoxColumn)(({ theme }) => ({
    margin: '170px 0 0 100px',
    gap: "20px",
    height: '100%',
    overflow: 'hidden',
    ".MuiTableContainer-root": {
        backgroundColor: mode ? bgDark : bgBright,
    },
    ".MuiPaper-root": {
        margin: '0 !important'
    },
    [theme.breakpoints.down('sm')]: {
        overflow: 'auto',
        margin: '60px 0 0 0',
    },
}));

export const StyleCircle = muiStyled(Box)(({ width, height, theme }) => ({
    width: "78px",
    height: "78px",
    borderRadius: "50%",
    background: `conic-gradient(
        #F6AD2B 0% ${width}%, 
        #233255 ${height}% 100% 
      )`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

export const StyleProcessBar = muiStyled(StyleBoxRow)(({ theme }) => ({
    width: '90%',
    height: '90%',
    borderRadius: '50%',
    border: '6px solid #f4f4f4',
    background: mode ? bgDark : bgBright,
    justifyContent: 'center',
    alignItems: 'center'
}));

export const StyleTitleCard = muiStyled('p')(({ theme }) => ({
    fontSize: '16px',
    color: mode ? clDark : clBright,
}));

export const StyleContentCard = muiStyled('p')(({ theme }) => ({
    fontSize: '8px',
    color: 'rgb(35,50,85,1)'
}));

export const StyleSumCoundCard = muiStyled('p')(({ theme }) => ({
    fontSize: '20px',
    color: !mode ? bgDark : bgBright,
}));

export const StyleBoxIndexFirst = muiStyled(Box)(({ theme }) => ({
    width: '5px',
    height: '5px',
    background: '#233255'
}));

export const StyleBoxIndexSecond = muiStyled(StyleBoxIndexFirst)(({ theme }) => ({
    width: '5px',
    height: '5px',
    background: '#F6AD2B'
}));

export const StyleRowGap5 = muiStyled(StyleBoxRow)(({ theme }) => ({
    gap: '5px',
    alignItems: 'center'
}));

export const StyleRowGap20 = muiStyled(StyleBoxRow)(({ theme }) => ({
    gap: '20px',
    alignItems: 'center'
}));

export const StyleColumnGap10 = muiStyled(StyleBoxColumn)(({ theme }) => ({
    gap: '10px',
    justifyContent: 'center'
}));

export const StyleTitleGrap = muiStyled('p')(({ theme }) => ({
    color: mode ? clDark2 : clBright2,
    fontSize: '20px',
    paddingLeft: '10px'
}));

export const StyleDashboardCardGrap = muiStyled(StyleDashboardCard)(({ theme }) => ({
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '300px'
}));

export const StyleBoxCardGrap = muiStyled(Box)(({ theme }) => ({
    maxWidth: '100%',
    overflowX: 'auto',
    '&::-webkit-scrollbar': {
        height: '3px',
        width: '3px'
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: mode ? clDark2 : clBright2, 
    },
    '&::-webkit-scrollbar-track': {
        backgroundColor: 'transparent', 
    },
    ".MuiBarElement-root": {
        width: '3px !important',
        fill: "#7FBDE4 !important"
    },
    ".MuiBarElement-root:nth-child(-n+12)": {
        fill: "#233255 !important"
    },
    ".MuiChartsLegend-root": {
        display: 'none'
    },
    ".MuiChartsAxis-label": {
        display: 'none'
    },
    "text": {
        fill: "rgb(35,50,85,0.7) !important"
    }
}));

export const StyleTable = muiStyled(StyleBoxColumn)(({ theme }) => ({
    border: "1px solid #80808021",
    borderRadius: '20px',
    paddingTop: '10px',
    gap: '20px',
    ".MuiTableCell-root": {
        background: `${mode ? bgDark : bgBright} !important`,
        border: `5px solid ${mode ? '#191818' : '#f4f4f4'} !important`,
        boxShadow: `0 0 9px 6px ${mode ? '#28262645' : '#d2d2d245'}`
    },
    ".MuiTableCell-sizeMedium": {
        fontSize: "14px",
        color: 'rgb(35,50,85,0.5)',
        background: 'white'
    },
    ".MuiTableCell-head": {
        color: "rgb(35,50,85,0.8)",
        fontSize: "14px",
    },
    ".MuiTableRow-head": {
        background: 'white'
    }
}));

export const StyleTitleTable = muiStyled('p')(({ theme }) => ({
    color: mode ? clDark2 : clBright2,
    fontSize: "20px"
}));

export const StyleViewAllTable = muiStyled('a')(({ theme }) => ({
    color: mode ? clDark3 : clBright3,
    fontSize: "14px"
}));

export const StyleHeadTable = muiStyled(StyleBoxRow)(({ theme }) => ({
    justifyContent: 'space-between',
    alignItems: 'end',
    padding: '0 10px'
}));

export const StyleBoxBody = muiStyled(Box)(({ theme }) => ({
    height: '100vh',
    width: '100vw',
    background: mode ? bgDark : bgBright,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}));

export const StyleMenu = muiStyled(Menu)(({ theme }) => ({
    ".MuiPaper-root": {
        background: mode ? bgDark : bgBright,
        color: mode ? clDark : clBright
    },
    "li:hover": {
        background: mode ? bgDarkLight : bgBrightLight,
    }
}));
