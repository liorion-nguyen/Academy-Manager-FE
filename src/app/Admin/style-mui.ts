"use client"
import { Box, Grid, Link, Typography } from "@mui/material";
import { styled as muiStyled } from "@mui/system";

export const StyleBoxRow = muiStyled(Box)(({ theme }) => ({
    display: "flex",
}));

export const StyleComponent = muiStyled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: 'center',
    width: '100%',
    background: "#FAFAFA",
    margin: '0'
}));

export const StyleBoxColumn = muiStyled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column"
}));

export const StyleGridLeft = muiStyled(Grid)(({ theme }) => ({
    background: "#FAFAFA",
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
}));

export const StyleBoxUser = muiStyled(StyleBoxRow)(({ theme }) => ({
    background: "#FFFFFF",
    borderRadius: '0 0 0 20px',
    width: '100%',
    height: '89px',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    boxShadow: "-4px 2px 6px 0px rgb(179 179 179 / 50%)",
    gap: "15px"
}));

export const StyleGridUserNotification = muiStyled(Grid)(({ theme }) => ({
    width: '100%',
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
    color: "rgb(35,50,85, 0.8)",
    fontSize: "14px",
}));

export const StyleBoxUserDisplay = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%'
}));

export const StyleCalendarEvent = muiStyled(StyleBoxColumn)(({ theme }) => ({
    paddingRight: "10px",
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
}));

export const StyleCalendar = muiStyled(StyleBoxColumn)(({ theme }) => ({
    background: "#FFFFFF",
    borderRadius: '10px',
    boxShadow: "-4px 2px 6px 0px rgb(179 179 179 / 50%)",
    gap: "20px"
}));

export const StyleEvent = muiStyled(StyleBoxColumn)(({ theme }) => ({
    background: "#FFFFFF",
    borderRadius: '10px 10px 0 0',
    boxShadow: "-4px 2px 6px 0px rgb(179 179 179 / 50%)",
    padding: '20px',
    gap: "20px"
}));

export const StyleH3TitleEvent = muiStyled('p')(({ theme }) => ({
    color: "rgb(35,50,85,0.8)",
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
    background: "#FFFFFF",
    display: 'flex',
    flexDirection: 'column',
    padding: '10px'
}));

export const StyleNavLeft = muiStyled(Box)(({ theme }) => ({
    background: "#233255",
    border: "1px solid #F6AD2B",
    width: '70px',
    height: '86vh',
    borderRadius: '50px 50px 0 0',
    position: 'fixed',
    bottom: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'center',
    padding: '40px 20px'
}));

export const StyleIconNavLeft = muiStyled(Box)(({ theme }) => ({
    width: '30px',
    height: '30px'
}));

export const StyleBoxIconNavLeft = muiStyled(StyleBoxColumn)(({ theme }) => ({
    gap: '30px'
}));

export const StyleBoxHeader = muiStyled(StyleBoxColumn)(({ width, theme }) => ({
    position: 'fixed',
    width: `${Number(width) - 30}px`,
    justifyContent: 'space-between',
    height: '110px',
    background: "white",
    padding: "15px",
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
    right: '0',
    bottom: '0',
    border: '1px solid #E5E5E5',
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
    color: 'rgba(35, 50, 85, 0.8)', // Sửa lỗi ở đây

    "&::placeholder": {
        color: "rgba(35, 50, 85, 0.3)", // Sửa lỗi ở đây
    }
}));

export const StyleDashboardCard = muiStyled(Grid)(({ theme }) => ({
    background: '#FFFFFF',
    boxShadow: "-4px 2px 6px 0px rgb(179 179 179 / 50%)",
    borderRadius: '20px',
    padding: '15px',
    display: 'flex',
    gap: '20px'
}));

export const StyleContent = muiStyled(StyleBoxColumn)(({ theme }) => ({
    margin: '170px 0 0 100px',
    gap: "50px"
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
    background: 'white',
    justifyContent: 'center',
    alignItems: 'center'
}));

export const StyleTitleCard = muiStyled('p')(({ theme }) => ({
    fontSize: '16px',
    color: 'rgb(35,50,85,0.7)'
}));

export const StyleContentCard = muiStyled('p')(({ theme }) => ({
    fontSize: '8px',
    color: 'rgb(35,50,85,1)'
}));

export const StyleSumCoundCard = muiStyled('p')(({ theme }) => ({
    fontSize: '20px',
    color: 'rgb(35,50,85,0.7)'
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
    color: "rgb(35,50,85,0.8)",
    fontSize: '20px'
}));

export const StyleDashboardCardGrap = muiStyled(StyleDashboardCard)(({ theme }) => ({
    flexDirection: 'column',
    justifyContent: 'space-between'
}));

export const StyleBoxCardGrap = muiStyled(Box)(({ theme }) => ({
    maxWidth: '100%',
    overflowX: 'auto',
}));

export const StyleTable = muiStyled(StyleBoxColumn)(({ theme }) => ({
    background: '#FFFFFF',
    boxShadow: "-4px 2px 6px 0px rgb(179 179 179 / 50%)",
    borderRadius: '20px',
    padding: '20px',
    gap: '20px'
}));

export const StyleTitleTable = muiStyled('p')(({ theme }) => ({
    color: "rgb(35,50,85,0.8)",
    fontSize: "20px"
}));

export const StyleViewAllTable = muiStyled('p')(({ theme }) => ({
    color: "rgb(35,50,85,0.6)",
    fontSize: "14px"
}));

export const StyleHeadTable = muiStyled(StyleBoxRow)(({ theme }) => ({
    justifyContent: 'space-between',
    alignItems: 'end'
}));



