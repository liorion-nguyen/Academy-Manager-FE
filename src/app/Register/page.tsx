import { Grid } from "@mui/material";
import { StyleAInTitle, StyleAllInput, StyleBoxAgree, StyleBoxColumn, StyleBoxDownTitle, StyleBoxMain, StyleBoxRight, StyleBoxRow, StyleBoxSubmit, StyleBoxTitle, StyleForm, StyleGridLeft, StyleGridRight, StyleH3Title, StyleIcon, StyleImgLeft, StyleInputSubmit, StyleInputText, StyleLogo, StyleMain, StylePAgree, StylePInTitle } from "../Login/style-mui";
import { StyleBoxRowHalf, StyleContainerAgree, StyleInputInRowHalf } from "./style-mui";
export default function Register() {
    return (
        <StyleBoxMain>
            <StyleMain>
                <Grid container>
                    <StyleGridLeft item xs={7}>
                        <StyleImgLeft src="/Images/login/bg_left.png" />
                    </StyleGridLeft>
                    <StyleGridRight item xs={5}>
                        <StyleBoxRight>
                            <StyleLogo>
                                <StyleImgLeft src="/Images/login/Logo.png" />
                            </StyleLogo>
                            <StyleBoxTitle>
                                <StyleH3Title>Registration Form</StyleH3Title>
                                <StyleBoxDownTitle>
                                    <StylePInTitle>Already have an account?</StylePInTitle>
                                    <StyleAInTitle href="../Login">Login</StyleAInTitle>
                                </StyleBoxDownTitle>
                            </StyleBoxTitle>
                            <StyleForm>
                                <StyleAllInput>
                                    <StyleBoxRowHalf>
                                        <StyleInputInRowHalf placeholder="First Name *" />
                                        <StyleInputInRowHalf placeholder="Last Name *" />
                                    </StyleBoxRowHalf>
                                    <StyleInputText placeholder="Enter Email *" />
                                    <StyleInputText placeholder="Confirm Email *" />
                                    <StyleBoxRowHalf>
                                        <StyleInputInRowHalf placeholder="Phone Number *" />
                                        <StyleInputInRowHalf placeholder="Token *" />
                                    </StyleBoxRowHalf>
                                    <StyleBoxRowHalf>
                                        <StyleContainerAgree>
                                            <StyleBoxAgree>
                                                <input type="checkbox" />
                                                <StylePAgree>Male</StylePAgree>
                                            </StyleBoxAgree>
                                            <StyleBoxAgree>
                                                <input type="checkbox" />
                                                <StylePAgree>Female</StylePAgree>
                                            </StyleBoxAgree>
                                        </StyleContainerAgree>
                                        <StyleInputInRowHalf placeholder="Department" />
                                    </StyleBoxRowHalf>
                                </StyleAllInput>
                                <StyleBoxSubmit>
                                    <StyleInputSubmit>
                                        <StyleIcon>
                                            <StyleImgLeft src="/Images/login/icon_login.png" />
                                        </StyleIcon>
                                        <p>REGISTER</p>
                                    </StyleInputSubmit>
                                </StyleBoxSubmit>
                            </StyleForm>
                        </StyleBoxRight>
                    </StyleGridRight>
                </Grid>
            </StyleMain>
        </StyleBoxMain>
    )
}
