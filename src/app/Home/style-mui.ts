"use client"
import { Box, Grid, Link, Typography } from "@mui/material";
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
    backgroundImage: 'url("/Images/home/background.png")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}));
