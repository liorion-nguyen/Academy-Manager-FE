import { Box, Button, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from "react-redux";
import { DisplayActions } from "@/redux/display";
import { useEffect, useState } from "react";
import { checkLogin } from "@/api/readtime";
import { UserActions } from "@/redux/user";
import { StyleBoxAvatarUser, StyleImgLeft } from "@/app/style-mui";
import { ArrowDropDownIcon } from "@mui/x-date-pickers";
import CloseIcon from '@mui/icons-material/Close';

export default function HeaderPhone() {
    const dispatch = useDispatch();
    const mode = useSelector((state: any) => state.display.navLeft);
    const handleOpen = () => {
        dispatch(DisplayActions.setNavLeft(!mode));
    }
    const [user, setUser] = useState<any>(null);
    useEffect(() => {
        const handleCheckCookie = async () => {
            const userInfo = await checkLogin();
            dispatch(UserActions.setUser(userInfo));
            setUser(userInfo);
        }
        handleCheckCookie();
    }, [])
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box
            sx={{
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100%',
                background: '#f5f3f39e',
                height: '60px',
                borderRadius: '0 0 10px 10px',
                zIndex: '1000000',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 15px'
            }}
        >
            {
                mode ? <CloseIcon onClick={handleOpen} /> : <MenuIcon onClick={handleOpen} />
            }
            
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <Box
                    sx={{
                        width: '40px',
                        height: '40px'
                    }}
                >
                    <StyleImgLeft src="/Images/admin/avatar_preview.png" />
                </Box>
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
                    document.cookie = "academy_manager=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
                    window.location.reload();
                    handleClose()
                }
                }>Logout</MenuItem>
            </Menu>
        </Box>
    );
}