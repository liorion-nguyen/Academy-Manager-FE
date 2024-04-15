"use client";
import { CircularProgress, Grid } from "@mui/material";
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
  StyleCircularProgress,
  StyleForm,
  StyleGridLeft,
  StyleGridRight,
  StyleH3Title,
  StyleIcon,
  StyleImgLeft,
  StyleImgLeftTitle,
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
  const [submit, setSubmit] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  async function Auth(request: account) {
    const data = await Request.post("/auth/login", request);
    return data;
  }
  useEffect(() => {
    const handleLoginCheck = async () => {
      try {
        const loggedIn = await checkLogin();
        setLoading(false);
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
    if (account.password.length < 5) {
      setNotify({
        open: true,
        message: "Vui lòng nhập mật khẩu lớn hơn 5 kí tự !",
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
      setSubmit(true);
      const data = await Auth(account);
      if (data.access_token) {
        Cookies.set("academy_manager", data.access_token, { expires: 1 });
        setNotify({
          open: true,
          message: "Đăng nhập thành công",
          severity: "success",
        });
        setTimeout(() => {
          router.push("/Overview");
        }, 500);
      } else {
        setSubmit(false);
        setNotify({
          open: true,
          message: "Email hoặc mật khẩu không chính xác!",
          severity: "error",
        });
      }
    } catch (error) {
      setNotify({
        open: true,
        message: "Fetch error!",
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
            <StyleGridLeft item md={7} xs={true}>
              <StyleImgLeftTitle src="/Images/login/bg_left.png" />
            </StyleGridLeft>
            <StyleGridRight item md={5} xs={12}>
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
                      {
                        submit ? <StyleCircularProgress /> :
                          <><StyleIcon>
                            <StyleImgLeft src="/Images/login/icon_login.png" />
                          </StyleIcon>
                            <p>Login</p></>
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
  );
}
