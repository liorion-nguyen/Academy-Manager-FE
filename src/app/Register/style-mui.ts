"use client"
import { Box, Grid } from "@mui/material";
import { styled as muiStyled } from "@mui/system";
import { StyleInputText } from "../Login/style-mui";

export const StyleBoxRow = muiStyled(Box)(({ theme }) => ({
  display: "flex",
}));

export const StyleBoxColumn = muiStyled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column"
}));

export const StyleBoxRowHalf = muiStyled(StyleBoxRow)(({ theme }) => ({
    width: '100%',
    justifyContent: 'space-between',
    gap: "50px"
}));

export const StyleInputInRowHalf = muiStyled(StyleInputText)(({ theme }) => ({
    width: '50%',
}));

export const StyleContainerAgree = muiStyled(StyleBoxRow)(({ theme }) => ({
    gap: "20px"
}));
