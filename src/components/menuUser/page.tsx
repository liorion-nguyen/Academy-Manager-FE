import { verifyToken } from "@/api/decodeCookie";
import { Request } from "@/api/request";
import { StyleBoxAvatarUser, StyleBoxInBoxUser, StyleBoxNotification, StyleBoxUser, StyleBoxUserDisplay, StyleIconDown, StyleImgLeft, StyleNameUser } from "@/app/style-mui";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Button, Menu, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function MenuUser() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    useEffect(()=> {
        const userInfo = verifyToken(Cookies.get('access') || "");
    }, [])
    return (
        <StyleBoxUser>
            <StyleBoxNotification>
                <StyleImgLeft src="/Images/admin/icon_notification.png" />
            </StyleBoxNotification>
            <StyleBoxUserDisplay>
                <StyleBoxInBoxUser>
                    <StyleBoxAvatarUser>
                        <StyleImgLeft src="/Images/admin/avatar_preview.png" />
                    </StyleBoxAvatarUser>
                    <StyleNameUser>User</StyleNameUser>
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
                    <MenuItem onClick={() => {
                        document.cookie = "access=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
                        window.location.reload();
                        handleClose()
                    }
                    }>Logout</MenuItem>
                </Menu>
            </StyleBoxUserDisplay>
        </StyleBoxUser>
    )
}