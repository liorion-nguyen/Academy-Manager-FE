"use client"
import { Box, Grid } from "@mui/material";
import { styled as muiStyled } from "@mui/system";

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
    maxWidth: '1440px',
    position: 'relative'
}));

export const StyleGridLeft = muiStyled(Grid)(({ theme }) => ({
    background: "#FFFFFF",
    position: "relative",
    height: "100%",
    display: 'flex'
}));

export const StyleGridRight = muiStyled(Grid)(({ theme }) => ({
    background: "#FFFFFF",
    position: "relative",
    height: "100%",
}));

export const StyleImgLeft = muiStyled('img')(({ theme }) => ({
    width: "100%",
    height: "100%"
}));

export const StyleLogo = muiStyled(Box)(({ theme }) => ({
    width: "140px",
    height: '50px'
}));

export const StyleIcon = muiStyled(Box)(({ theme }) => ({
    width: "23px",
    height: '15px'
}));

export const StyleInputText = muiStyled('input')(({ theme }) => ({
    width: "100%",
    height: '50px',
    borderRadius: '5px',
    border: "1px solid rgb(35,50,85,0.4)",
    paddingLeft: "15px",
    fontSize: "14px",
    color: "#233255"
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
    gap: "30px"
}))

export const StyleAllInput = muiStyled(StyleBoxColumn)(({ theme }) => ({
    gap: "25px"
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