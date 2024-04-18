"use client"
import { Box, Button, Grid } from "@mui/material";
import { styled as muiStyled } from "@mui/system";

export const StyleBoxRow = muiStyled(Box)(({ theme }) => ({
    display: "flex",
}));

export const StyleBoxColumn = muiStyled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column"
}));

export const StyleBoxSearch = muiStyled(Grid)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
}));

export const StyleBoxSearch2 = muiStyled(StyleBoxSearch)(({ theme }) => ({
    gap: '15px',
    justifyContent: 'end'
}));

export const StyleTextP = muiStyled('p')(({ theme }) => ({
    fontSize: '12px',
    color: 'grey'
}));

export const StyleInputText = muiStyled('input')(({ theme }) => ({
    border: '1px solid grey',
    color: 'grey',
    fontSize: '15px',
    padding: '8px',
    borderRadius: '5px',
}));

export const StyleInputSelect = muiStyled('select')(({ theme }) => ({
    border: '1px solid grey',
    color: 'grey',
    fontSize: '15px',
    padding: '8px',
    borderRadius: '5px',
    width: '-webkit-fill-available'
}));

export const StyleButton = muiStyled(Button)(({ theme }) => ({
    background: '#e0e0e0',
    color: 'rgba(0, 0, 0, 0.87)',
    width: '-webkit-fill-available',
    ':hover': {
        background: '#b7b4b4'
    }
}));

export const StyleBoxBtn = muiStyled(StyleBoxRow)(({ theme }) => ({
    justifyContent: 'center'
}));

export const StyleTapClass = muiStyled(Box)(({ theme }) => ({
    width: '50vw',
    [theme.breakpoints.down('sm')]: {
        width: '100vw',
        marginTop: '60px'
    },
}));

export const StyleBoxTable = muiStyled(Box)(({ theme }) => ({
    height: 'auto',
    maxHeight: '85%',
    width: '100%',
    ".MuiDataGrid-columnHeaderTitle": {
        color: "rgb(35,50,85,0.8)",
        fontSize: '15px'
    },
    ".MuiDataGrid-cellContent": {
        color: "rgb(35,50,85,0.7)",
        fontSize: '14px'
    },
    ".MuiDataGrid-columnHeaders": {
        background: "#F8F8F8",
        border: '0.5px solid rgb(35,50,85,0.1) !important'
    },
    ".MuiDataGrid-row": {
        background: 'white',
        border: '0.5px solid rgb(35,50,85,0.1) !important',
        width: '100% !important'
    },
    ".MuiSvgIcon-root": {
        width: '15px',
        height: '15px'
    },
    ".MuiCheckbox-root": {
        color: 'rgb(35,50,85,0.1)'
    },
    ".MuiDataGrid-cell[data-colindex='2'], .MuiDataGrid-cell[data-colindex='3'], .MuiDataGrid-columnHeader[aria-colindex='4'], .MuiDataGrid-columnHeader[aria-colindex='3']": {
        minWidth: "22% !important",
        maxWidth: "22% !important",
    },
    ".MuiDataGrid-cell[data-colindex='1'], .MuiDataGrid-cell[data-colindex='4'], .MuiDataGrid-columnHeader[aria-colindex='5'], .MuiDataGrid-columnHeader[aria-colindex='2']": {
        minWidth: "16% !important",
        maxWidth: "16% !important",
    },
    ".MuiDataGrid-cell[data-colindex='5'], .MuiDataGrid-columnHeader[aria-colindex='6']": {
        minWidth: "24% !important",
        maxWidth: "24% !important",
    },
    ".MuiDataGrid-columnHeadersInner, .css-yrdy0g-MuiDataGrid-columnHeaderRow, .MuiDataGrid-virtualScrollerRenderZone": {
        width: '100% !important',
        [theme.breakpoints.down('sm')]: {
            width: 'max-content !important',
        },
    },
    ".MuiTablePagination-displayedRows": {
        display: 'none'
    },
    ".MuiDataGrid-virtualScrollerContent": {
        minHeight: '30vh !important'
    }
}));
