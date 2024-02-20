import { StyleHeaderTop } from "@/app/style-mui";
import { StyleImgLeft, StyleLogo } from "@/app/Login/style-mui";
import { StyleBoxHeader } from "./style-mui";

export default function HeaderHome() {
    return (
        <StyleBoxHeader>
            <StyleLogo>
                <StyleImgLeft src="/Images/login/Logo.png" />
            </StyleLogo>
        </StyleBoxHeader>

    );
}