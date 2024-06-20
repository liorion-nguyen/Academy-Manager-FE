import { verifyToken } from "@/api/decodeCookie";
import { Request } from "@/api/request";
import { StyleBoxAvatarUser, StyleBoxInBoxUser, StyleBoxNotification, StyleBoxUser, StyleBoxUserDisplay, StyleIconDown, StyleImgLeft, StyleNameUser } from "@/app/style-mui";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Button, Menu, MenuItem, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { checkLogin } from "@/api/readtime";
import { useDispatch, useSelector } from "react-redux";
import { UserActions } from "@/redux/user";
import { useRouter } from "next/navigation";

export default function MenuUser() {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [user, setUser] = useState<any>(null);
    useEffect(() => {
        const handleCheckCookie = async () => {
            const userInfo = await checkLogin();
            dispatch(UserActions.setUser(userInfo));
            setUser(userInfo);
        }
        handleCheckCookie();
    }, [])

    const router = useRouter();
    const handleLogout = () => {
        document.cookie = "academy_manager=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
        router.push("/Login")
        handleClose()
    }
    useEffect(()=> {
        console.log(user);
    }, [user])
    
    return (
        <>
            <StyleBoxUser>

                <StyleBoxUserDisplay>
                    <StyleBoxInBoxUser>
                        {
                            user ? <>
                                <StyleBoxAvatarUser>
                                    <StyleImgLeft src="/Images/admin/avatar_preview.png" />
                                </StyleBoxAvatarUser>
                                <StyleNameUser>{user.fullName}</StyleNameUser>
                            </> :
                                <>
                                    <Skeleton variant="circular" width={50} height={50} />
                                    <Skeleton width={100} height={50} />
                                </>
                        }

                    </StyleBoxInBoxUser>

                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <ArrowDropDownIcon
                            sx={{
                                color: "grey",
                                fontSize: "30px",
                                transform: open ? "rotate(180deg)" : "",
                            }}
                        />
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </StyleBoxUserDisplay>
            </StyleBoxUser>
        </>
    )
}