"use client"
import { Grid } from "@mui/material";
import { StyleAInTitle, StyleAllInput, StyleBoxAgree, StyleBoxColumn, StyleBoxDownTitle, StyleBoxMain, StyleBoxRight, StyleBoxRow, StyleBoxSubmit, StyleBoxTitle, StyleForm, StyleGridLeft, StyleGridRight, StyleH3Title, StyleIcon, StyleImgLeft, StyleInputSubmit, StyleInputText, StyleLogo, StyleMain, StylePAgree, StylePInTitle } from "../Login/style-mui";
import { StyleBoxRowHalf, StyleContainerAgree, StyleInputInRowHalf } from "./style-mui";
import { useEffect, useState } from "react";
import { Request } from "@/api/request";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useRouter } from "next/navigation";
import SimpleSnackbar from "@/components/snackbar";
import { checkLogin } from "@/api/readtime";
interface account {
    fullName: string;
    email: string;
    phone: string;
    password: string;
    gender: string;
    role: string;
    address: null;
    avatar: null;
    isActive: boolean;
    isLoggedIn: boolean;
    lastLoginAt: null;
}
interface notify {
    open: boolean;
    message: string;
    severity: string;
}
export default function Register() {
    useEffect(() => {
        const handleLoginCheck = async () => {
            try {
                const loggedIn = await checkLogin();
                if (loggedIn) {
                    router.push("/Overview")
                    return;
                }
            } catch (error) {
                console.error('Error checking login status:', error);
            }
        };
        handleLoginCheck();
    }, []);

    const [notify, setNotify] = useState<notify>({
        open: false,
        message: "",
        severity: "",
    });
    async function CreateAccount(request: account) {
        const data = await Request.post("/users", request);
        return data;
    }
    const router = useRouter();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cfpassword, setCfPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('');
    const handleCreateUser = async () => {
        try {
            const data = await CreateAccount(
                {
                    fullName: firstName + " " + lastName,
                    email: email,
                    phone: phoneNumber,
                    role: "student",
                    gender: getSelectedValue(),
                    password: password,
                    address: null,
                    avatar: null,
                    isActive: true,
                    isLoggedIn: false,
                    lastLoginAt: null
                }
            );;
            if (data.message) {
                setNotify({
                    open: true,
                    message: "Error validation!",
                    severity: "error",
                });
            } else {
                setNotify({
                    open: true,
                    message: data.message[0],
                    severity: "error",
                });
            }
        } catch (error) {
            setNotify({
                open: true,
                message: "Đăng ký thành công!",
                severity: "success",
            });
            setTimeout(() => {
                router.push("/login");
            }, 1000);
        }
    }

    function getSelectedValue() {
        const selectedRadio = document.querySelector('input[type="radio"][name="gender"]:checked') as HTMLInputElement; // Type casting
        if (selectedRadio) {
            return selectedRadio.value;
        } else {
            return "No selection made";
        }
    }

    return (
        <>
            <SpeedInsights />
            <StyleBoxMain>
                <StyleMain>
                    <SimpleSnackbar notify={notify} setNotify={setNotify} />
                    <Grid container>
                        <StyleGridLeft item md={7} xs={true}>
                            <StyleImgLeft src="/Images/login/bg_left.png" />
                        </StyleGridLeft>
                        <StyleGridRight item md={5} xs={12}>
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
                                            <StyleInputInRowHalf placeholder="First Name *" value={firstName} onChange={(e: any) => {
                                                setFirstName(e.target.value);
                                            }} />
                                            <StyleInputInRowHalf placeholder="Last Name *" value={lastName} onChange={(e: any) => {
                                                setLastName(e.target.value);
                                            }} />
                                        </StyleBoxRowHalf>
                                        <StyleInputText placeholder="Enter Email *" value={email} onChange={(e: any) => {
                                            setEmail(e.target.value);
                                        }} />
                                        <StyleInputText placeholder="Password *" type="password" value={password} onChange={(e: any) => {
                                            setPassword(e.target.value);
                                        }} />
                                        <StyleInputText placeholder="Confirm Password *" type="password" value={cfpassword} onChange={(e: any) => {
                                            setCfPassword(e.target.value);
                                        }} />
                                        <StyleBoxRowHalf>
                                            <StyleInputInRowHalf placeholder="Phone Number *" value={phoneNumber} onChange={(e: any) => {
                                                setPhoneNumber(e.target.value);
                                            }} />
                                            <StyleContainerAgree>
                                                <StyleBoxAgree>
                                                    <input type="radio" name="gender" value="male" />
                                                    <StylePAgree>Male</StylePAgree>
                                                </StyleBoxAgree>
                                                <StyleBoxAgree>
                                                    <input type="radio" name="gender" value="female" />
                                                    <StylePAgree>Female</StylePAgree>
                                                </StyleBoxAgree>
                                                <StyleBoxAgree>
                                                    <input type="radio" name="gender" value="other" />
                                                    <StylePAgree>Other</StylePAgree>
                                                </StyleBoxAgree>
                                            </StyleContainerAgree>
                                        </StyleBoxRowHalf>
                                    </StyleAllInput>
                                    <StyleBoxSubmit>
                                        <StyleInputSubmit onClick={handleCreateUser}>
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

        </>
    )
}
