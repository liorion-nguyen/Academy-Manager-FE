"use client"
import { Box, CircularProgress, Grid } from "@mui/material";
import { styled as muiStyled, width } from "@mui/system";

let mode = false;
if (typeof window !== 'undefined') {
    // mode = JSON.parse(localStorage.getItem('dark') || "false");
    const mode = false;
}
const bgDark = '#131314';
const bgDarkLight = '#1e1f20';
const bgBright = '#FFFFFF';
const bgBrightLight = '#FAFAFA';

export const StyleBoxRow = muiStyled(Box)(({ theme }) => ({
    display: "flex",
}));

export const StyleBoxColumn = muiStyled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column"
}));

export const StyleMain = muiStyled(StyleBoxRow)(({ theme }) => ({
    width: "100%",
    height: "100vh",
    position: 'relative',
    background: mode ? bgDarkLight : bgBrightLight,
}));

export const StyleGridLeft = muiStyled(Grid)(({ theme }) => ({
    position: "relative",
    height: "100%",
    display: 'flex'
}));

export const StyleGridRight = muiStyled(Grid)(({ theme }) => ({
    position: "relative",
    height: "100%"
}));

export const StyleImgLeft = muiStyled('img')(({ theme }) => ({
    width: "100%",
    height: "auto"
}));


export const StyleImgLeftTitle = muiStyled(StyleImgLeft)(({ theme }) => ({
    [theme.breakpoints.down('xs')]: {
        display: 'none',
    },
    [theme.breakpoints.up('sm')]: {
        display: 'flex',
    },
}));

export const StyleLogo = muiStyled(Box)(({ theme }) => ({
    width: "300px",
    margin: '0 auto',
    paddingBottom: '20px',
    [theme.breakpoints.down('sm')]: {
        width: "250px",
    },
}));

export const StyleIcon = muiStyled(Box)(({ theme }) => ({
    width: "23px",
    height: '15px'
}));

export const StyleInputText = muiStyled('input')(({ theme }) => ({
    width: "100%",
    minHeight: '50px',
    borderRadius: '5px',
    border: "1px solid rgb(35,50,85,0.4)",
    paddingLeft: "15px",
    fontSize: "14px",
    color: "#233255",
    background: mode ? bgDarkLight : ""
}));

export const StyleInputSubmit = muiStyled('button')(({ theme }) => ({
    width: "180px",
    height: '45px',
    borderRadius: '25px',
    border: "none",
    fontSize: "16x",
    fontWeight: "bold",
    color: "#6e6d6b",
    background: "linear-gradient(to right, #7FBDE4, #F6AD2B, #7FBDE4)",
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    alignItems: 'center'
}));

export const StyleForm = muiStyled(StyleBoxColumn)(({ theme }) => ({
    marginTop: '15px',
    gap: "30px",
}))

export const StyleAllInput = muiStyled(StyleBoxColumn)(({ theme }) => ({
    gap: "25px",
    maxHeight: '350px',
    [theme.breakpoints.down('sm')]: {
        overflowY: 'scroll',
    },
}))

export const StyleBoxSubmit = muiStyled(StyleBoxRow)(({ theme }) => ({
    width: "100%",
    display: 'flex',
    justifyContent: 'center',
    marginTop: '15px'
}))

export const StyleBoxTitle = muiStyled(StyleBoxColumn)(({ theme }) => ({
    gap: "10px"
}))

export const StyleH3Title = muiStyled('h3')(({ theme }) => ({
    color: '#233255',
    fontSize: '25px'
}))

export const StyleAInTitle = muiStyled('a')(({ theme }) => ({
    color: '#F6AD2B',
    fontSize: '14px'
}))

export const StylePInTitle = muiStyled('p')(({ theme }) => ({
    color: 'rgb(36, 51, 86, 0.7)',
    fontSize: '14px'
}))

export const StyleBoxDownTitle = muiStyled(StyleBoxRow)(({ theme }) => ({
    gap: "5px"
}))

export const StyleBoxAgree = muiStyled(StyleBoxRow)(({ theme }) => ({
    gap: "15px",
    alignItems: "center"
}))

export const StylePAgree = muiStyled('p')(({ theme }) => ({
    fontSize: '15px',
    color: 'rgb(35,50,85,0.8)'
}))

export const StyleBoxRight = muiStyled(StyleBoxColumn)(({ theme }) => ({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    gap: "35px",
    padding: '0 50px'
}))

export const StyleBoxMain = muiStyled(StyleBoxColumn)(({ theme }) => ({
    width: "100%",
    height: '100%',
    alignItems: 'center'
}))

export const StyleCircularProgress = muiStyled(CircularProgress)(({ theme }) => ({
    color: "#7f7f80",
    width: '30px !important',
    height: '30px !important',
}))