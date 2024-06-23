"use client"
import { StyleBoxRow } from "@/app/style-mui";
import { Box, Menu, MenuItem } from "@mui/material";
import { styled as muiStyled } from "@mui/system";

const mode = JSON.parse(localStorage.getItem('dark') || "false");
const bgDark = '#131314';
const bgBright = '#FFFFFF';
const bgDarkLight = '#1e1f20';
const bgBrightLight = '#FAFAFA';
const clDark = 'rgb(188,189,191,0.7)';
const clBright = 'rgb(35,50,85,0.7)';

export const StyleMenuItem = muiStyled(MenuItem)(({ theme }) => ({
    display: "flex",
    justifyContent: 'space-between',
    gap: '15px'
}));

export const StyleBoxItem = muiStyled(StyleBoxRow)(({ theme }) => ({
    gap: '15px'
}));

export const StyleMenu = muiStyled(Menu)(({ theme }) => ({
    ".MuiPaper-root": {
        background: mode ? bgDark : bgBright,
        color: mode ? clDark : clBright,
    },
    "li:hover": {
        background: mode ? bgDarkLight : bgBrightLight,
    }
}));
