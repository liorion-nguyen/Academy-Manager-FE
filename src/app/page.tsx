import { useEffect } from "react";
import { useRouter } from "next/router";
import { StyleBoxBody } from "./style-mui";
import { CircularProgress } from "@mui/material";

export default function OverView() {
    const router = useRouter();

    useEffect(() => {
        router.push('/Overview');
    }, []);

    return (
        <StyleBoxBody>
            <CircularProgress />
        </StyleBoxBody>
    );
}
