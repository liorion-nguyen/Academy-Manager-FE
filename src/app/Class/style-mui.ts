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
}));

export const StyleButton = muiStyled(Button)(({ theme }) => ({
    background: '#e0e0e0',
    color: 'rgba(0, 0, 0, 0.87)',
    ':hover': {
        background: '#b7b4b4'
    }
}));

export const StyleBoxBtn = muiStyled(StyleBoxRow)(({ theme }) => ({
    justifyContent: 'center'
}));