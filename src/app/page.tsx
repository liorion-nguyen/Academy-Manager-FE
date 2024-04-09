"use client"
import { useRouter } from "next/navigation";
import { StyleBoxBody } from "./style-mui";
import { CircularProgress } from "@mui/material";

export default function OverView() {
    // const router = useRouter();
    // router.push('/Overview')
    return (
        <StyleBoxBody>
            <CircularProgress />
        </StyleBoxBody>
    );
}