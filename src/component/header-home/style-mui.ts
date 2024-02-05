"use client"
import { Box } from "@mui/material";
import { styled as muiStyled } from "@mui/system";

export const StyleBoxRow = muiStyled(Box)(({ theme }) => ({
    display: "flex",
}));

export const StyleBoxColumn = muiStyled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column"
}));

export const StyleBoxHeader = muiStyled(StyleBoxColumn)(({ theme }) => ({
    position: 'fixed',
    top: '0',
    left: '0',
    width: `100%`,
    justifyContent: 'space-between',
    height: '50px',
    background: "white",
    padding: "15px 30px",
}));