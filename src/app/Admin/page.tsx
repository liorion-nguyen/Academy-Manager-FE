"use client"
import { Box } from "@mui/system";
import { StyleLogo, StyleMain } from "../Login/style-mui";
import { Breadcrumbs, Button, Grid } from "@mui/material";
import { StyleBoxUser, StyleGridLeft, StyleGridUserNotification, StyleBoxNotification, StyleImgLeft, StyleBoxAvatarUser, StyleNameUser, StyleBoxInBoxUser, StyleIconDown, StyleBoxUserDisplay, StyleCalendarEvent, StyleEvent, StyleH3TitleEvent, StyleBoxButton, StyleBoxNote, StyleContentNote, StyleTitleNote, StyleTimeNote, StyleNote, StyleCalendar, StyleComponent, StyleGridRight, StyleNavLeft, StyleIconNavLeft, StyleBoxIconNavLeft, StyleBoxHeader, StyleLinkPoint, StyleTypographyPoint, StyleContent, StyleSearch, StyleInpSearch, StyleHeaderTop, StyleDashboardCard, StyleCircle, StyleProcessBar, StyleTitleCard, StyleContentCard, StyleSumCoundCard, StyleBoxIndexFirst, StyleBoxIndexSecond, StyleRowGap5, StyleRowGap20, StyleColumnGap10 } from "./style-mui";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useEffect, useRef, useState } from "react";
export default function Admin() {
    const Notes = [{
        title: "Saturday",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam.",
        date: "9TH April 2022",
        color: "246,173,43"
    },
    {
        title: "Saturday",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam.",
        date: "9TH April 2022",
        color: "77,193,82"
    },
    {
        title: "Saturday",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam.",
        date: "9TH April 2022",
        color: "246,43,43"
    },
    {
        title: "Saturday",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam.",
        date: "9TH April 2022",
        color: "35,50,85"
    }]
    const Icons = [
        {
            href: "#",
            icon: "/Images/admin/icon_navleft/overview.svg",
        },
        {
            href: "#",
            icon: "/Images/admin/icon_navleft/student.svg",
        },
        {
            href: "#",
            icon: "/Images/admin/icon_navleft/class.svg",
        },
        {
            href: "#",
            icon: "/Images/admin/icon_navleft/variant.svg",
        },
        {
            href: "#",
            icon: "/Images/admin/icon_navleft/teacher.svg",
        },
        {
            href: "#",
            icon: "/Images/admin/icon_navleft/users.svg",
        },
        {
            href: "#",
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
    const [timeNote, setTimeNote] = useState("all");
    const handleChangeTimeNote = (value: string) => {
        setTimeNote(value);
    }

    const elementRef = useRef<HTMLDivElement | null>(null);
    const [elementWidth, setElementWidth] = useState<number | 1000>(1000);
    useEffect(() => {
        if (elementRef.current) {
            setElementWidth(elementRef.current.clientWidth);
        }
    }, []);
    return (
        <StyleComponent>
            <StyleMain>
                <StyleGridUserNotification container spacing={2}>
                    <StyleGridRight item xs={9} ref={elementRef}>
                        <StyleBoxHeader width={elementWidth}>
                            <StyleHeaderTop>
                                <StyleLogo>
                                    <StyleImgLeft src="/Images/login/Logo.png" />
                                </StyleLogo>
                                <Breadcrumbs aria-label="breadcrumb"
                                    sx={{
                                        ".MuiBreadcrumbs-separator": {
                                            margin: '0 2px'
                                        }
                                    }}
                                >
                                    <StyleLinkPoint
                                        underline="hover"
                                        color="inherit"
                                        href="/"
                                    >
                                        Administrator
                                    </StyleLinkPoint>
                                    <StyleTypographyPoint color="text.primary">Dashboard</StyleTypographyPoint>
                                </Breadcrumbs>
                            </StyleHeaderTop>
                            <StyleSearch>
                                <img src="/Images/admin/icon_search.svg" />
                                <StyleInpSearch type="text" placeholder="Search..." />
                            </StyleSearch>

                        </StyleBoxHeader>

                        <StyleContent>
                            <Grid container spacing={2}>
                                <StyleDashboardCard item xs={4}>
                                    <StyleCircle width={61} height={39}>
                                        <StyleProcessBar>
                                            <img src="/Images/admin/icon_student.svg" />
                                        </StyleProcessBar>
                                    </StyleCircle>
                                    <Box>
                                        <StyleColumnGap10>
                                            <StyleTitleCard>STUDENTS</StyleTitleCard>
                                            <StyleRowGap20>
                                                <StyleRowGap5>
                                                    <StyleBoxIndexFirst></StyleBoxIndexFirst>
                                                    <StyleContentCard>male (61%)</StyleContentCard>
                                                </StyleRowGap5>
                                                <StyleRowGap5>
                                                    <StyleBoxIndexSecond></StyleBoxIndexSecond>
                                                    <StyleContentCard>Female (39%)</StyleContentCard>
                                                </StyleRowGap5>
                                            </StyleRowGap20>
                                            <StyleSumCoundCard>308</StyleSumCoundCard>
                                        </StyleColumnGap10>
                                    </Box>
                                </StyleDashboardCard>
                                <StyleDashboardCard item xs={4}>
                                    <StyleCircle width={61} height={39}>
                                        <StyleProcessBar>
                                            <img src="/Images/admin/icon_staff.svg" />
                                        </StyleProcessBar>
                                    </StyleCircle>
                                    <Box>
                                        <StyleColumnGap10>
                                            <StyleTitleCard>Staff</StyleTitleCard>
                                            <StyleRowGap20>
                                                <StyleRowGap5>
                                                    <StyleBoxIndexFirst></StyleBoxIndexFirst>
                                                    <StyleContentCard>male (55%)</StyleContentCard>
                                                </StyleRowGap5>
                                                <StyleRowGap5>
                                                    <StyleBoxIndexSecond></StyleBoxIndexSecond>
                                                    <StyleContentCard>Female (45%)</StyleContentCard>
                                                </StyleRowGap5>
                                            </StyleRowGap20>
                                            <StyleSumCoundCard>100</StyleSumCoundCard>
                                        </StyleColumnGap10>
                                    </Box>
                                </StyleDashboardCard>
                                <StyleDashboardCard item xs={4}>
                                    <StyleCircle width={61} height={39}>
                                        <StyleProcessBar>
                                            <img src="/Images/admin/icon_subject.svg" />
                                        </StyleProcessBar>
                                    </StyleCircle>
                                    <Box>
                                        <StyleColumnGap10>
                                            <StyleTitleCard>Subjects</StyleTitleCard>
                                            <StyleRowGap20>
                                                <StyleRowGap5>
                                                    <StyleBoxIndexFirst></StyleBoxIndexFirst>
                                                    <StyleContentCard>male (50%)</StyleContentCard>
                                                </StyleRowGap5>
                                                <StyleRowGap5>
                                                    <StyleBoxIndexSecond></StyleBoxIndexSecond>
                                                    <StyleContentCard>Female (50%)</StyleContentCard>
                                                </StyleRowGap5>
                                            </StyleRowGap20>
                                            <StyleSumCoundCard>50</StyleSumCoundCard>
                                        </StyleColumnGap10>
                                    </Box>
                                </StyleDashboardCard>
                            </Grid>
                        </StyleContent>

                        <StyleNavLeft>
                            <StyleBoxIconNavLeft>
                                {
                                    Icons.map((icon, index) => (
                                        <Box key={index}>
                                            <img src={icon.icon} />
                                        </Box>
                                    ))
                                }
                            </StyleBoxIconNavLeft>
                            <StyleIconNavLeft>
                                <StyleImgLeft src="/Images/admin/icon_navleft/setting.svg" />
                            </StyleIconNavLeft>
                        </StyleNavLeft>
                    </StyleGridRight>
                    <StyleGridLeft item xs={3}>
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
                                <StyleIconDown>
                                    <StyleImgLeft src="/Images/admin/icon_down.png" />
                                </StyleIconDown>
                            </StyleBoxUserDisplay>
                        </StyleBoxUser>

                        <StyleCalendarEvent>
                            <StyleCalendar>
                                <LocalizationProvider
                                    dateAdapter={AdapterDayjs}>
                                    <DemoContainer
                                        sx={{
                                            ".MuiPickersToolbar-root": {
                                                display: 'none'
                                            },
                                            ".MuiDialogActions-root": {
                                                display: 'none'
                                            },
                                            ".MuiPickersCalendarHeader-label": {
                                                color: '#7FBDE4',
                                                fontSize: '16px'
                                            },
                                            ".MuiPickersCalendarHeader-switchViewButton": {
                                                display: 'none'
                                            },
                                            ".MuiSvgIcon-fontSizeInherit": {
                                                color: "#7FBDE4"
                                            },
                                            ".css-1u23akw-MuiButtonBase-root-MuiPickersDay-root.Mui-selected": {
                                                borderRadius: '5px',
                                                background: '#7FBDE4',
                                                color: '#FFFFFF'
                                            },
                                            ".MuiPickersLayout-root": {
                                                borderRadius: '10px'
                                            }
                                        }}
                                        components={[
                                            'DatePicker',
                                            'MobileDatePicker',
                                            'DesktopDatePicker',
                                            'StaticDatePicker',
                                        ]}
                                    >
                                        <StaticDatePicker defaultValue={dayjs('2022-04-17')} />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </StyleCalendar>
                            <StyleEvent>
                                <StyleH3TitleEvent>Upcoming events</StyleH3TitleEvent>
                                <StyleBoxButton sx={{
                                    ".MuiButton-outlinedPrimary": {
                                        border: "1px solid rgb(127,189,228,0.8)",
                                        borderRadius: "21px",
                                        fontSize: '10px',
                                        minWidth: '50px',
                                    }
                                }}>
                                    <Button sx={{ background: timeNote === "all" ? "rgb(35,50,85,0.8)" : "transparent", color: timeNote === "all" ? "#FFD791" : "rgb(2,189,228,0.8)", }} variant="outlined" onClick={() => handleChangeTimeNote("all")}>All</Button>
                                    <Button sx={{ background: timeNote === "today" ? "rgb(35,50,85,0.8)" : "transparent", color: timeNote === "today" ? "#FFD791" : "rgb(2,189,228,0.8)", }} variant="outlined" onClick={() => handleChangeTimeNote("today")}>Today</Button>
                                    <Button sx={{ background: timeNote === "weekly" ? "rgb(35,50,85,0.8)" : "transparent", color: timeNote === "weekly" ? "#FFD791" : "rgb(2,189,228,0.8)", }} variant="outlined" onClick={() => handleChangeTimeNote("weekly")}>Weekly</Button>
                                    <Button sx={{ background: timeNote === "monthly" ? "rgb(35,50,85,0.8)" : "transparent", color: timeNote === "monthly" ? "#FFD791" : "rgb(2,189,228,0.8)", }} variant="outlined" onClick={() => handleChangeTimeNote("monthly")}>Monthly</Button>
                                </StyleBoxButton>
                                <StyleNote>
                                    {
                                        Notes.map((note, index) => (
                                            <StyleBoxNote color={(note.color)} key={index}>
                                                <StyleTitleNote>{note.title}</StyleTitleNote>
                                                <StyleContentNote>{note.content}</StyleContentNote>
                                                <StyleTimeNote>{note.date}</StyleTimeNote>
                                            </StyleBoxNote>
                                        ))
                                    }
                                </StyleNote>
                            </StyleEvent>
                        </StyleCalendarEvent>

                    </StyleGridLeft>
                </StyleGridUserNotification>
            </StyleMain >
        </StyleComponent>
    );
}