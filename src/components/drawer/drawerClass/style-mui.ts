"use client"
import { Box, Tab, TextareaAutosize } from "@mui/material";
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
const bgDarkBtn = '#2b2b2b';
const bgBrightBtn = '#e0e0e0';

export const StyleBoxRow = muiStyled(Box)(({ theme }) => ({
    display: "flex",
}));

export const StyleBoxColumn = muiStyled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column"
}));

export const StyleBoxTab = muiStyled(StyleBoxColumn)(({ theme }) => ({
    padding: '25px',
}));

export const StyleH6 = muiStyled('h6')(({ theme }) => ({
    fontSize: '1.25rem',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: '500',
    lineHeight: '1.6',
    letterSpacing: '0.0075em',
    color: mode ? clDark : clBright,
}));

export const StyleStateTxt = muiStyled('p')(({ theme }) => ({
    fontSize: '0.9rem',
    fontWeight: '500',
    color: mode ? clDark : clBright,
}));

export const StyleBoxTitle = muiStyled(StyleBoxRow)(({ theme }) => ({
    gap: '15px',
    alignItems: 'center',
    ".MuiTabs-flexContainer": {
        width: '100%',
        overflowY: 'scroll'
    }
}));

export const StyleTitleTab = muiStyled(Tab)(({ theme }) => ({
    fontSize: '12px',
    padding: '5px !important',
    color: mode ? clDark : clBright,
}));

export const StyleContentTab1 = muiStyled('p')(({ theme }) => ({
    fontSize: '12px',
    color: mode ? clDark : clBright,
}));

export const StyleInputTab1 = muiStyled('input')(({ theme }) => ({
    border: '1px solid grey',
    padding: '10px',
    color: 'grey',
    borderRadius: '10px',
    background: mode ? bgDarkLight : bgBrightLight,
}));

export const StyleBoxContentTab1 = muiStyled(StyleBoxColumn)(({ theme }) => ({
    gap: '10px'
}));

export const StyleBoxMainTab1 = muiStyled(StyleBoxColumn)(({ theme }) => ({
    gap: '15px'
}));

export const StyleButtonReturn = muiStyled(StyleBoxRow)(({ theme }) => ({
    justifyContent: 'right',
    width: '100%'
}));

export const StyleBoxTeacher = muiStyled(StyleBoxRow)(({ theme }) => ({
    gap: '10px',
    alignItems: 'center'
}));

export const StyleMainTeacher = muiStyled(StyleBoxColumn)(({ theme }) => ({
    gap: '15px'
}));

export const StyleHr = muiStyled('hr')(({ theme }) => ({
    height: '1px',
    background: 'grey',
    border: 'none'
}));

export const StyleTilteP = muiStyled('p')(({ theme }) => ({
    fontSize: "16px",
    fontWeight: '500',
    color: mode ? clDark : clBright,
}));

export const StyleCountP = muiStyled('p')(({ theme }) => ({
    fontWeight: '500'
}));

export const StyleBoxType = muiStyled(StyleInputTab1)(({ theme }) => ({
    width: '50px'
}));

export const StyleBoxTeacherRow = muiStyled(StyleBoxRow)(({ theme }) => ({
    gap: '30px'
}));

export const StylePMin = muiStyled('p')(({ theme }) => ({
    fontSize: '11px',
    color: 'grey'
}));

export const StyleBoxTime = muiStyled(StyleBoxRow)(({ theme }) => ({
    gap: '15px',
    alignItems: 'center',
    ".MuiInputBase-input": {
        padding: '8px',
        color: mode ? clDark : clBright,
    }
}));

export const StyleBoxCmt = muiStyled(StyleBoxColumn)(({ theme }) => ({
    gap: '15px',
}));

export const StyleBoxTitleCmt = muiStyled(StyleBoxRow)(({ theme }) => ({
    gap: '8px',
    alignItems: 'center',
    paddingBottom: '5px',
    borderBottom: '1px solid #80808042'
}));

export const StyleBoxContentCmt = muiStyled(StyleBoxColumn)(({ theme }) => ({
    gap: '10px',
}));

export const StyleTxtTitleCmt = muiStyled('p')(({ theme }) => ({
    fontWeight: '500',
    fontSize: '13px'
}));

export const StyleInpTitleCmt = muiStyled('input')(({ theme }) => ({
    border: '1px solid transparent',
    width: '100%',
    padding: '10px 20px',
    outline: 'grey',
    ":hover": {
        border: '1px solid grey'
    }
}));

export const StyleBoxStuCmt = muiStyled(StyleBoxColumn)(({ theme }) => ({
    gap: '10px'
}));

export const StyleTextAreaStuCmt = muiStyled(TextareaAutosize)(({ theme }) => ({
    height: '100px !important',
    padding: '10px',
    border: '1px solid grey',
    outline: 'grey',
}));