import { Grid } from "@mui/material";
import { StyleAInTitle, StyleAllInput, StyleBoxAgree, StyleBoxColumn, StyleBoxDownTitle, StyleBoxRight, StyleBoxRow, StyleBoxSubmit, StyleBoxTitle, StyleForm, StyleGridLeft, StyleGridRight, StyleH3Title, StyleIcon, StyleImgLeft, StyleInputSubmit, StyleInputText, StyleLogo, StyleMain, StylePAgree, StylePInTitle } from "./style-mui";
export default function Login() {
    return (
        <StyleMain>
            <Grid container spacing={2}>
                <StyleGridLeft item xs={7}>
                    <StyleImgLeft src="/Images/login/bg_left.png" />
                </StyleGridLeft>
                <StyleGridRight item xs={5}>
                    <StyleBoxRight>
                        <StyleLogo>
                            <StyleImgLeft src="/Images/login/Logo.png" />
                        </StyleLogo>
                        <StyleBoxTitle>
                            <StyleH3Title>Login Form</StyleH3Title>
                            <StyleBoxDownTitle>
                                <StylePInTitle>Do not have an account?</StylePInTitle>
                                <StyleAInTitle href="../Register">Registration</StyleAInTitle>
                            </StyleBoxDownTitle>
                        </StyleBoxTitle>
                        <StyleForm>
                            <StyleAllInput>
                                <StyleInputText placeholder="Enter Email *" />
                                <StyleInputText placeholder="Enter Password *" />
                            </StyleAllInput>
                            <StyleBoxAgree>
                                <input type="checkbox" />
                                <StylePAgree>Agree to Lms terms</StylePAgree>
                            </StyleBoxAgree>
                            <StyleBoxSubmit>
                                <StyleInputSubmit>
                                    <StyleIcon>
                                        <StyleImgLeft src="/Images/login/icon_login.png" />
                                    </StyleIcon>
                                    <p>Login</p>
                                </StyleInputSubmit>
                            </StyleBoxSubmit>
                        </StyleForm>
                    </StyleBoxRight>
                </StyleGridRight>
            </Grid>
        </StyleMain>
    )
}
