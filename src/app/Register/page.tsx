"use client"
import { Button, CircularProgress, Grid } from "@mui/material";
import { StyleAInTitle, StyleAllInput, StyleBoxAgree, StyleBoxColumn, StyleBoxDownTitle, StyleBoxMain, StyleBoxRight, StyleBoxRow, StyleBoxSubmit, StyleBoxTitle, StyleCircularProgress, StyleForm, StyleGridLeft, StyleGridRight, StyleH3Title, StyleIcon, StyleImgLeft, StyleInputSubmit, StyleInputText, StyleLogo, StyleMain, StylePAgree, StylePInTitle } from "../Login/style-mui";
import { StyleBoxRowHalf, StyleContainerAgree, StyleInputInRowHalf } from "./style-mui";
import { useEffect, useState } from "react";
import { Request } from "@/api/request";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useRouter } from "next/navigation";
import SimpleSnackbar from "@/components/snackbar";
import { checkLogin } from "@/api/readtime";
import SendIcon from '@mui/icons-material/Send';

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
    const [submit, setSubmit] = useState(false);
    const [send, setSend] = useState(0);
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
    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');
    const [cfpassword, setCfPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('');
    const [countDown, setCountDown] = useState(60);
    const handleCreateUser = async () => {
        if (!code || code.length < 6) {
            setNotify({
                open: true,
                message: "Please check the input code!",
                severity: "error",
            });
            return;
        }
        try {
            setSubmit(true);
            const data = await Request.post(`/confirm/code/${code}`, {
                fullName: firstName + " " + lastName,
                email: email,
                phone: phoneNumber,
                gender: getSelectedValue(),
                password: password,
                address: null,
                avatar: null,
                isActive: true,
                isLoggedIn: false,
                lastLoginAt: null
            });
            console.log(data);

            setSubmit(false);
            if (data.message) {
                setNotify({
                    open: true,
                    message: data.message,
                    severity: data.status ? "success" : "error",
                });
                if (data.status) {
                    setTimeout(() => {
                        router.push("/login");
                    }, 1000);
                }
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
                message: "Register account error!",
                severity: "error",
            });
        }
    }

    function getSelectedValue() {
        const selectedRadio = document.querySelector('input[type="radio"][name="gender"]:checked') as HTMLInputElement;
        if (selectedRadio) {
            return selectedRadio.value;
        } else {
            return "No selection made";
        }
    }

    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSendCode = async () => {
        setSend(1);
        setCountDown(60);
        if (!firstName || !lastName || !phoneNumber || getSelectedValue() == "No selection made" || !password) {
            setNotify({
                open: true,
                message: "You must fill in all the information to get the code",
                severity: "error",
            });
            setSend(0);
            return false;
        }
        const fetchData = await Request.post("/confirm/email", {
            fullName: firstName + " " + lastName,
            email: email,
            phone: phoneNumber,
            gender: getSelectedValue(),
            password: password,
            role: "student"
        });
        setNotify({
            open: true,
            message: "Please check your mailbox",
            severity: "success",
        });
        setSend(2);
    }

    useEffect(() => {
        if (send == 2) {
            if (countDown > 0) {
                const timerId = setTimeout(() => {
                    setCountDown(countDown - 1);
                }, 1000);
                return () => clearTimeout(timerId);
            } else {
                setSend(0);
            }
        }
    }, [countDown, send]);

    useEffect(() => {
        console.log(send);
    }, [send])

    return (
        <>
            <SpeedInsights />
            <StyleBoxMain>
                <StyleMain>
                    <SimpleSnackbar notify={notify} setNotify={setNotify} />
                    <Grid container>
                        <StyleGridLeft item md={7} sm={5} xs={true}>
                            <StyleImgLeft src="/Images/login/bg_left.png" />
                        </StyleGridLeft>
                        <StyleGridRight item md={5} sm={7} xs={12}>
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
                                        <StyleBoxRowHalf>
                                            <StyleInputText placeholder="Enter Email *" value={email} onChange={(e: any) => {
                                                setEmail(e.target.value);
                                            }} />
                                            {
                                                (send != 2) ?
                                                    <Button disabled={!isValidEmail(email) || send == 1} variant="contained" endIcon={send == 0 || countDown != 0 ? <SendIcon /> : <CircularProgress color="inherit" sx={{ width: '15px' }} />} onClick={handleSendCode}>
                                                        Send
                                                    </Button> :
                                                    <>
                                                        <StyleInputText sx={{ minWidth: '30%', maxWidth: "100%" }} placeholder="Enter Code *" value={code} onChange={(e: any) => {
                                                            setCode(e.target.value);
                                                        }} />
                                                    </>
                                            }
                                            <p style={{display: send != 2 ? "none" : "flex"}}>{countDown}</p>
                                        </StyleBoxRowHalf>
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
                                            {
                                                submit ? <StyleCircularProgress /> :
                                                    <><StyleIcon>
                                                        <StyleImgLeft src="/Images/login/icon_login.png" />
                                                    </StyleIcon>
                                                        <p>REGISTER</p></>
                                            }
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
