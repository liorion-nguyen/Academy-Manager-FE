"use client"
import { Box, Button, Grid } from "@mui/material";
import { styled as muiStyled } from "@mui/system";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

export const StyleBoxRow = muiStyled(Box)(({ theme }) => ({
    display: "flex",
}));

export const StyleBoxColumn = muiStyled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column"
}));

export const StyleDemoContainer = muiStyled(DemoContainer)(({ theme }) => ({
    
}));
