"use client";
import { Grid } from "@mui/material";
import { SpeedInsights } from "@vercel/speed-insights/next"
import {
  StyleAInTitle,
  StyleAllInput,
  StyleBoxAgree,
  StyleBoxDownTitle,
  StyleBoxMain,
  StyleBoxRight,
  StyleBoxSubmit,
  StyleBoxTitle,
  StyleForm,
  StyleGridLeft,
  StyleGridRight,
  StyleH3Title,
  StyleIcon,
  StyleImgLeft,
  StyleInputSubmit,
  StyleInputText,
  StyleLogo,
  StyleMain,
  StylePAgree,
  StylePInTitle,
} from "./style-mui";
import { Request } from "@/api/request";
import { useEffect, useState } from "react";
import SimpleSnackbar from "@/components/snackbar";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { checkLogin } from "@/api/readtime";

interface account {
  email: string;
  password: string;
  agree: boolean;
}
interface notify {
  open: boolean;
  message: string;
  severity: string;
}

export default function Login() {
  const router = useRouter();
  useEffect(() => {
    checkLogin().then((e) => {
      if (e) {
        router.push("/")
        return;
      }
      router.push('/login')
    });
  }, [router])
  const [account, setAccount] = useState<account>({ email: "", password: "", agree: false });
  const [notify, setNotify] = useState<notify>({
    open: false,
    message: "",
    severity: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAccount((prevUser) => ({ ...prevUser, [name]: name === 'agree' ? !account.agree : value }));
  };
  const Login = async () => {
    const error = [];
    if (!account.agree) {
      setNotify({
        open: true,
        message: "Vui lòng đồng ý với điều khoản!",
        severity: "error",
      });
      error.push('isChecked');
    }
    if (account.password.length < 9) {
      setNotify({
        open: true,
        message: "Vui lòng nhập mật khẩu lớn hơn 8 kí tự !",
        severity: "error",
      });
      error.push('pass')

    }
    if (account.email.length < 9) {
      setNotify({
        open: true,
        message: "Vui lòng nhập email lớn hơn 8 kí tự !",
        severity: "error",
      });
      error.push('email')

    }
    if (error.length > 0) {
      return;
    }

    try {
      const data = await Auth(account);
      if (data.access_token) {
        Cookies.set("access", data.access_token, { expires: 1 });
        setNotify({
          open: true,
          message: "Đăng nhập thành công",
          severity: "success",
        });
        setTimeout(() => {
          router.push("/Overview");
        }, 1200);
      } else {
        setNotify({
          open: true,
          message: "Email hoặc mật khẩu không chính xác!",
          severity: "error",
        });
      }
    } catch (error) {
      setNotify({
        open: true,
        message: "Email hoặc mật khẩu không chính xác!",
        severity: "error",
      });
    }
  };

  return (
    <>
      <SpeedInsights />
      <StyleBoxMain>
        <StyleMain>
          <SimpleSnackbar notify={notify} setNotify={setNotify} />
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
                  <StyleH3Title>Login Form</StyleH3Title>
                  <StyleBoxDownTitle>
                    <StylePInTitle>Do not have an account?</StylePInTitle>
                    <StyleAInTitle href="../Register">Registration</StyleAInTitle>
                  </StyleBoxDownTitle>
                </StyleBoxTitle>
                <StyleForm>
                  <StyleAllInput>
                    <StyleInputText
                      placeholder="Enter Email *"
                      name="email"
                      onChange={handleChange}
                    />
                    <StyleInputText
                      placeholder="Enter Password *"
                      name="password"
                      onChange={handleChange}
                    />
                  </StyleAllInput>
                  <StyleBoxAgree>
                    <input type="checkbox" name='agree' onChange={handleChange} />
                    <StylePAgree>Agree to Lms terms</StylePAgree>
                  </StyleBoxAgree>
                  <StyleBoxSubmit onClick={Login}>
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
      </StyleBoxMain>
    </>
  );
}

async function Auth(request: account) {
  const data = await Request.post("/auth/login", request);
  return data;
}
