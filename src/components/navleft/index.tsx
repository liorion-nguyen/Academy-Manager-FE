import { StyleBoxIconNavLeft, StyleIconNavLeft, StyleImgLeft, StyleNavLeft } from "@/app/style-mui";
import { Box, Button, FormControlLabel, Menu, MenuItem } from "@mui/material";
import { usePathname } from 'next/navigation'
import { useEffect, useState } from "react";
import LinkIcon from '@mui/icons-material/Link';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ViewTimelineOutlinedIcon from '@mui/icons-material/ViewTimelineOutlined';
import { StyleBoxItem, StyleMenuItem } from "./style-mui";
import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
import { useDispatch, useSelector } from "react-redux";
import { DisplayActions } from "@/redux/display";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 32,
      height: 32,
      '&::before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));
  const label = { inputProps: { 'aria-label': 'Color switch demo' } };

export default function NavLeft() {
    const dispatch = useDispatch();
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const [openSetting, setOpenSetting] = useState(false);
    const Icons = [
        {
            href: "/Overview",
            icon: "/Images/admin/icon_navleft/overview.svg",
        },
        {
            href: "/Student",
            icon: "/Images/admin/icon_navleft/student.svg",
        },
        {
            href: "/Class",
            icon: "/Images/admin/icon_navleft/class.svg",
        },
        {
            href: "#",
            icon: "/Images/admin/icon_navleft/variant.svg",
        },
        {
            href: "/Teacher",
            icon: "/Images/admin/icon_navleft/teacher.svg",
        },
        {
            href: "/User",
            icon: "/Images/admin/icon_navleft/users.svg",
        },
        {
            href: "/ChatAi",
            icon: "/Images/admin/icon_navleft/messages.svg",
        },
        {
            href: "#",
            icon: "/Images/admin/icon_navleft/finance.svg",
        },
        {
            href: "#",
            icon: "/Images/admin/icon_navleft/fluent.svg",
        },
        {
            href: "#",
            icon: "/Images/admin/icon_navleft/notice.svg",
        },
    ]
    const pathname = usePathname()

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setOpenSetting(true)
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setOpenSetting(false)
        setAnchorEl(null);
    };
    const mode = useSelector((state: any) => state.display.navLeft);
    const width = useSelector((state: any) => state.display.width);
    
    const [sizeWidth, setSizeWidth] = useState(width);
    const [openMode, setOpenMode] = useState(mode);
    useEffect(() => {
        setSizeWidth(width);
    }, [width])
    useEffect(() => {
        setOpenMode(mode);
        // if (mode) {
        //     setTimeout(() => {
        //         if (!isHovered) {
        //             dispatch(DisplayActions.setNavLeft(false));
        //         }
        //     }, 3000)
        // }
    }, [mode])

    const handleCloseNavLeft = () => {
        dispatch(DisplayActions.setNavLeft(false));
    }
    
    return (
        <StyleNavLeft sx={{
            display: width !== "xs" || openMode ? 'flex' : "none"
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            <StyleBoxIconNavLeft>
                {
                    Icons.map((icon, index) => (
                        <Box key={index} onClick={handleCloseNavLeft}>
                            <a href={icon.href} >
                                <img src={icon.icon}
                                    style={{
                                        filter: pathname === icon.href ? 'invert(85%) sepia(105%) saturate(4000%) hue-rotate(42deg) brightness(108%) contrast(61%)' : ''
                                    }}
                                />
                            </a>
                        </Box>
                    ))
                }
            </StyleBoxIconNavLeft>
            <button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                style={{ background: 'transparent', border: '0' }}
            >

                <StyleIconNavLeft>
                    <StyleImgLeft src="/Images/admin/icon_navleft/setting.svg"
                        style={{
                            filter: openSetting ? 'invert(85%) sepia(105%) saturate(4000%) hue-rotate(42deg) brightness(108%) contrast(61%)' : ''
                        }}
                    />
                </StyleIconNavLeft>
            </button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <StyleMenuItem>
                    <StyleBoxItem>
                        <LinkIcon />
                        <p>Your public link</p>
                    </StyleBoxItem>
                </StyleMenuItem>
                <StyleMenuItem>
                    <StyleBoxItem>
                        <DarkModeOutlinedIcon />
                        <p>Dark interface</p>
                    </StyleBoxItem>
                    <FormControlLabel
                        sx={{margin: '0 !important', ".MuiSwitch-root": {margin: '0 !important'}}}
                        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                        label=""
                    />
                </StyleMenuItem>
                <StyleMenuItem>
                    <StyleBoxItem>
                        <ViewTimelineOutlinedIcon />
                        <p>Real-time feedback</p>
                    </StyleBoxItem>
                    <Switch {...label} defaultChecked />
                </StyleMenuItem>
            </Menu>

        </StyleNavLeft>

    );
}