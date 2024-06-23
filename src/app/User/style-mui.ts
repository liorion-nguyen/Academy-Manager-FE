"use client"
import { Box } from "@mui/material";
import { styled as muiStyled } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";

const mode = JSON.parse(localStorage.getItem('dark') || "false");
const bgDark = '#131314';
const bgDarkLight = '#1e1f20';
const bgBright = '#FFFFFF';
const bgBrightLight = '#FAFAFA';
const bdDark = 'rgba(80, 80, 80, 1)';
const bdBright = 'rgba(224, 224, 224, 1)';
const clDark = 'rgb(188,189,191,0.7)';
const clBright = 'rgb(35,50,85,0.7)';

export const StyleBoxRow = muiStyled(Box)(({ theme }) => ({
    display: "flex",
}));

export const StyleBoxColumn = muiStyled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column"
}));

export const StyleTitleH3 = muiStyled('h3')(({ theme }) => ({
    fontSize: '23px',
    fontWeight: '500',
    color: mode ? clDark : clBright,
}));

export const StyleInput = muiStyled('input')(({ theme }) => ({
    border: '1px solid #545454',
    borderRadius: '10px',
    padding: '10px',
    fontSize: '16px',
    background: 'transparent'
}));

export const StyleBoxInput = muiStyled(StyleBoxRow)(({ theme }) => ({
    border: '1px solid #545454',
    borderRadius: '10px',
    padding: '10px',
    fontSize: '16px',
    background: 'transparent',
    gap: '10px',
    alignItems: 'center',
    width: 'calc(50% - 10px)',
    justifyContent: 'space-between',
    "input": {
        border: '0',
        background: 'transparent !important',
        width: 'auto'
    }
}));

export const StyleLabelInput = muiStyled('label')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
}));


export const StyleBoxRowInputFirst = muiStyled(StyleBoxRow)(({ theme }) => ({
    gap: '20px',
    [theme.breakpoints.down('sm')]: {
        height: '40px'
    },
}));

export const StyleBoxRowInput = muiStyled(StyleBoxRow)(({ theme }) => ({
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        gap: '20px'
    },
}));

export const StyleButtonInput = muiStyled('button')(({ theme }) => ({
    border: '1px solid #707070',
    borderRadius: '10px',
    background: 'transparent',
    padding: '0 10px',
    ":hover": {
        cursor: 'pointer'
    },
    [theme.breakpoints.down('sm')]: {
        height: '40px'
    },
}));

export const StyleButtonChoose = muiStyled(StyleButtonInput)(({ theme }) => ({
    background: '#FB6B03',
    color: '#FFFFFF',
    padding: '0 20px'
}));

export const StyleDataGrid = muiStyled(DataGrid)(({ theme }) => ({
    ".MuiDataGrid-columnHeadersInner, .MuiDataGrid-row, .MuiDataGrid-columnHeadersInner>div, .MuiDataGrid-virtualScrollerRenderZone": {
        width: '100%',
    },
    ".MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
        maxWidth: '15% !important',
        minWidth: '15% !important',
        width: '15% !important',
    },
    ".MuiDataGrid-columnHeader:first-child,  .MuiDataGrid-cell:first-child": {
        maxWidth: '10% !important',
        minWidth: '10% !important',
        width: '10% !important'
    },
    ".MuiDataGrid-overlay": {
        display: 'none'
    },
     ".MuiDataGrid-withBorderColor": {
        borderColor: mode ? bdDark : bdBright
    },
}));

export const StyleModalBox = muiStyled(StyleBoxColumn)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '#825d5791 0 0 5px 3px',
    background: mode ? bgDark : bgBright,
    padding: '50px 30px',
    borderRadius: '20px',
    width: '40%',
    gap: '20px',
    [theme.breakpoints.down('sm')]: {
        width: '90%',
        height: 'calc(100% - 100px)',
        transform: 'none',
        overflow: 'scroll',
        top: '80px',
        left: '5%',
        boxShadow: '#825d5791 0 0 5px 3px',
    },
}));

export const StyleGroupInp = muiStyled(StyleBoxRow)(({ theme }) => ({
    justifyContent: 'space-between',
    gap: '20px',
    ".MuiFormControl-root": {
        width: '100%',
        height: '40px',
        margin: '0'
    },
    ".MuiInputBase-root": {
        height: '100%'
    }
}));

export const StyleInp = muiStyled('input')(({ theme }) => ({
    width: '100%',
    height: '40px',
    borderRadius: '5px',
    border: '1px solid #bdbdbd',
    padding: '0 15px',
    color: mode ? clDark : clBright,
    background: mode ? bgDark : bgBright,
}));

export const StyleBoxInp = muiStyled(StyleBoxColumn)(({ theme }) => ({
    width: '-webkit-fill-available',
    gap: '5px'
}));

export const StyleTitleInfo = muiStyled('p')(({ theme }) => ({
    fontSize: '23px',
    fontWeight: '500',
    marginBottom: '25px',
    color: mode ? clDark : clDark,
}));

export const StyleTitleInp = muiStyled('p')(({ theme }) => ({
    fontSize: '16px',
    fontWeight: '400',
    color: mode ? clDark : clDark,
}));

export const StyleDesInp = muiStyled('p')(({ theme }) => ({
    fontSize: '11px',
    fontWeight: '300',
    color: 'grey'
}));

export const StyleBoxBtn = muiStyled(StyleBoxRow)(({ theme }) => ({
    justifyContent: 'center',
    gap: '50px'
}));