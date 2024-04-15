"use client"
import { StyleBoxRow } from "@/app/style-mui";
import { Box, MenuItem } from "@mui/material";
import { styled as muiStyled } from "@mui/system";

export const StyleMenuItem = muiStyled(MenuItem)(({ theme }) => ({
    display: "flex",
    justifyContent: 'space-between',
    gap: '15px'
}));

export const StyleBoxItem = muiStyled(StyleBoxRow)(({ theme }) => ({
    gap: '15px'
}));
