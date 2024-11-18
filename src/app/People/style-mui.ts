"use client"
import { Box, Button, Grid } from "@mui/material";
import { styled as muiStyled } from "@mui/system";
import { StyleBoxTable } from "../Class/style-mui";

// const mode = JSON.parse(localStorage.getItem('dark') || "false");
const mode = false;
const bgDark = '#131314';
const bgDarkLight = '#1e1f20';
const bgBright = '#FFFFFF';
const bgBrightLight = '#F8F8F8';
const clDark = 'rgb(188,189,191,0.7)';
const clDark2 = 'rgb(188,189,191,0.8)';
const clDark3 = 'rgb(188,189,191,0.6)';
const clBright = 'rgb(35,50,85,0.7)';
const clBright2 = 'rgb(35,50,85,0.8)';
const clBright3 = 'rgb(35,50,85,0.6)';
const bdDark = 'rgba(80, 80, 80, 1)';
const bdBright = 'rgba(224, 224, 224, 1)';

export const StyleBoxRow = muiStyled(Box)(({ theme }) => ({
    display: "flex",
}));

export const StyleBoxColumn = muiStyled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column"
}));

export const StyleDetailStudent = muiStyled(StyleBoxColumn)(({ theme }) => ({
    background: mode ? bgDark : bgBright,
    borderRadius: '20px 0 0 20px',
    width: '100%',
    height: '-webkit-fill-available',
    padding: '40px 20px 80px 20px',
    border: "1px solid #80808021",
    gap: "60px",
    [theme.breakpoints.down('sm')]: {
        border: '0',
        marginTop: '60px',
        padding: '20px 20px 30px 20px',
    },
}));

export const StyleColumnGap30 = muiStyled(StyleBoxColumn)(({ theme }) => ({
    gap: "30px"
}));

export const StyleTitleDetailStu = muiStyled('p')(({ theme }) => ({
    color: mode ? clDark2 : clBright2,
    fontSize: "20px"
}));

export const StyleMainContent = muiStyled('p')(({ color, theme }) => ({
    color: color,
    fontSize: "15px"
}));

export const StyleTitleContent = muiStyled('p')(({ theme }) => ({
    color: mode ? clDark2 : clBright2,
    fontSize: "10px",
    textTransform: "uppercase",
}));

export const StyleBoxContent = muiStyled(StyleBoxColumn)(({ theme }) => ({
    gap: '5px'
}));

export const StyleBoxContact = muiStyled(StyleBoxColumn)(({ theme }) => ({
    gap: '20px',
    maxHeight: '65vh',
    overflowY: 'auto',
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
}));

export const StyleBtnEdit = muiStyled(Button)(({ theme }) => ({
    color: mode ? clDark2 : clBright2,
    border: '1px solid rgb(35,50,85,0.8)',
    fontSize: '16px',
}));

export const StyleBtnDelete = muiStyled(Button)(({ theme }) => ({
    color: '#F62B2B',
    border: '1px solid #F62B2B',
    fontSize: '16px',
}));

export const StyleBtnSave = muiStyled(Button)(({ theme }) => ({
    color: '#11a311c9',
    border: '1px solid #11a311c9',
    fontSize: '16px',
}));

export const StyleBoxBtn = muiStyled(StyleBoxRow)(({ theme }) => ({
    justifyContent: 'space-between',
    padding: '0 20px'
}));

export const StyleButton = muiStyled(Button)(({ theme }) => ({
    background: mode ? bgDark : bgBright,
    color: mode ? clDark2 : clBright2,
    fontSize: "16px",
}));

export const StyleButtonCreate = muiStyled(Button)(({ theme }) => ({
    background: mode ? clBright2 : clDark2,
    color: "#FDFDF5",
    fontSize: "16px",
}));

export const StyleBoxBtnHandle = muiStyled(StyleBoxRow)(({ theme }) => ({
    gap: '10px',
    justifyContent: 'end',
    width: '100%'
}));

export const StyleContent = muiStyled(StyleBoxColumn)(({ theme }) => ({
    margin: '120px 0 0 100px',
    gap: "20px",
    background: mode ? bgDarkLight : bgBrightLight,
    padding: '15px',
    borderRadius: '10px 10px 0 0',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
        margin: '60px 0 0 0',
        background: mode ? bgDark : bgBright,
    },
    ".MuiDataGrid-columnHeadersInner, .css-yrdy0g-MuiDataGrid-columnHeaderRow, .MuiDataGrid-virtualScrollerRenderZone": {
        width: '100% !important',
        [theme.breakpoints.down('sm')]: {
            width: 'inherit !important',
        },
    },
    ".MuiDataGrid-withBorderColor": {
        borderColor: mode ? bdDark : bdBright
    },
}));


export const StyleSearch = muiStyled(StyleBoxRow)(({ theme }) => ({
    border: '0.5px solid #E5E5E5',
    borderRadius: '5px',
    alignItems: 'center',
    gap: '15px',
    paddingLeft: '15px',
    background: mode ? bgDark : bgBright,
    fontSize: '16px',
    width: '30%',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        height: '50px'
    },
}));

export const StyleFilter = muiStyled(Grid)(({ theme }) => ({
    borderTop: '1px solid rgb(35,50,85,0.1)',
    borderBottom: '1px solid rgb(35,50,85,0.1)',
    paddingBottom: '16px',
    "em": {
        color: mode ? clDark2 : clBright2,
        fontSize: '16px'
    },
    ".MuiFormControl-root": {
        width: '100%'
    },
    ".MuiOutlinedInput-notchedOutline": {
        border: '0.5px solid #E5E5E5 !important'
    },
    ".MuiSelect-select": {
        background: mode ? bgDark : bgBright,
    },
    ".MuiSvgIcon-root": {
        color: mode ? clDark2 : clBright2,
    },
}));

export const StyleCountStu = muiStyled('p')(({ theme }) => ({
    color: mode ? clDark : clBright,
    fontSize: '14px',
    padding: "20px 10px",
    background: mode ? bgDark : bgBright,
    marginBottom: '3px'
}));

export const StyleBoxTable2 = muiStyled(StyleBoxTable)(({ theme }) => ({
    ".MuiDataGrid-virtualScrollerContent": {
        minHeight: '45vh !important'
    },
    ".MuiDataGrid-columnHeadersInner, .css-yrdy0g-MuiDataGrid-columnHeaderRow, .MuiDataGrid-virtualScrollerRenderZone": {
        width: '100% !important',
        [theme.breakpoints.down('sm')]: {
            width: 'inherit !important',
        },
    },
    ".MuiDataGrid-row, .MuiDataGrid-columnHeadersInner": {
        background: mode ? bgDark : bgBright,
    },
    ".MuiDataGrid-footerContainer": {
        display: 'none'
    },
    ".MuiDataGrid-row, .MuiDataGrid-root": {
        border: `1px solid ${mode ? '#2f2f2fcc' : "#E5E5E5"} !important`,
    }
}));
