"use client"
import { StyleBoxBody } from "./style-mui";
import { CircularProgress } from "@mui/material";
import { useEffect } from "react";

export default function OverView() {
    useEffect(() => {
        window.location.href = '/Overview';
    }, []);


    return (
        <StyleBoxBody>
            <CircularProgress />
        </StyleBoxBody>
    );
}
