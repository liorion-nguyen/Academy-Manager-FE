"use client"
import { Box } from "@mui/system";
import { StyleLogo, StyleMain } from "../Login/style-mui";
import { Breadcrumbs, Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { StyleBoxUser, StyleGridLeft, StyleGridUserNotification, StyleBoxNotification, StyleImgLeft, StyleBoxAvatarUser, StyleNameUser, StyleBoxInBoxUser, StyleIconDown, StyleBoxUserDisplay, StyleCalendarEvent, StyleEvent, StyleH3TitleEvent, StyleBoxButton, StyleBoxNote, StyleContentNote, StyleTitleNote, StyleTimeNote, StyleNote, StyleCalendar, StyleComponent, StyleGridRight, StyleNavLeft, StyleIconNavLeft, StyleBoxIconNavLeft, StyleBoxHeader, StyleLinkPoint, StyleTypographyPoint, StyleContent, StyleSearch, StyleInpSearch, StyleHeaderTop, StyleDashboardCard, StyleCircle, StyleProcessBar, StyleTitleCard, StyleContentCard, StyleSumCoundCard, StyleBoxIndexFirst, StyleBoxIndexSecond, StyleRowGap5, StyleRowGap20, StyleColumnGap10, StyleTitleGrap, StyleDashboardCardGrap, StyleBoxCardGrap, StyleTable, StyleTitleTable, StyleViewAllTable, StyleHeadTable } from "./style-mui";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useEffect, useRef, useState } from "react";
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import Paper from '@mui/material/Paper';
import Header from "@/component/header/page";
import NavLeft from "@/component/navleft/page";
export default function Admin() {
    const chartSetting = {
        yAxis: [
            {
                label: 'rainfall (mm)',
            },
        ],
        width: 500,
        height: 300,
        sx: {
            [`.${axisClasses.left} .${axisClasses.label}`]: {
                transform: 'translate(-20px, 0)',
            },
        },
    };
    const dataset = [
        {
            london: 59,
            paris: 57,
            month: 'Jan',
        },
        {
            london: 50,
            paris: 52,
            month: 'Fev',
        },
        {
            london: 47,
            paris: 53,
            month: 'Mar',
        },
        {
            london: 54,
            paris: 56,
            month: 'Apr',
        },
        {
            london: 57,
            paris: 69,
            month: 'May',
        },
        {
            london: 60,
            paris: 63,
            month: 'June',
        },
        {
            london: 59,
            paris: 60,
            month: 'July',
        },
        {
            london: 65,
            paris: 60,
            month: 'Aug',
        },
        {
            london: 51,
            paris: 51,
            month: 'Sept',
        },
        {
            london: 60,
            paris: 65,
            month: 'Oct',
        },
        {
            london: 67,
            paris: 64,
            month: 'Nov',
        },
        {
            london: 61,
            paris: 70,
            month: 'Dec',
        },
    ];

    function createData(
        name: string,
        id: string,
        role: string,
        gender: string,
        email: string,
    ) {
        return { name, id, role, gender, email };
    }

    const rows = [
        createData('ActivEdge Technologies', 'AET154-5671', "Teacher", "Male", "activedgetecnologies@gmail.com"),
        createData('ActivEdge Technologies', 'AET154-5671', "Teacher", "Male", "activedgetecnologies@gmail.com"),
        createData('ActivEdge Technologies', 'AET154-5671', "Teacher", "Male", "activedgetecnologies@gmail.com"),
        createData('ActivEdge Technologies', 'AET154-5671', "Teacher", "Male", "activedgetecnologies@gmail.com"),
        createData('ActivEdge Technologies', 'AET154-5671', "Teacher", "Male", "activedgetecnologies@gmail.com"),
    ];

    const valueFormatter = (value: number) => `${value}mm`;
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
                        <Header value={elementWidth} />

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
                            <Grid container spacing={2}>
                                <StyleDashboardCardGrap item xs={7}
                                    sx={{
                                        "text": {
                                            fill: "rgb(35,50,85,0.7) !important"
                                        }
                                    }}
                                >
                                    <StyleTitleGrap>Attendance Summary</StyleTitleGrap>
                                    <LineChart
                                        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                                        series={[
                                            {
                                                data: [2, 5.5, 2, 8.5, 1.5, 5],
                                                area: true,
                                            },
                                        ]}
                                    />
                                </StyleDashboardCardGrap>
                                <StyleDashboardCardGrap item xs={5}>
                                    <StyleTitleGrap>Financial Summary</StyleTitleGrap>
                                    <StyleBoxCardGrap
                                        sx={{
                                            ".MuiBarElement-root": {
                                                width: '3px !important',
                                                fill: "#7FBDE4 !important"
                                            },
                                            ".MuiBarElement-root:nth-child(-n+12)": {
                                                fill: "#233255 !important"
                                            },
                                            ".MuiChartsLegend-root": {
                                                display: 'none'
                                            },
                                            ".MuiChartsAxis-label": {
                                                display: 'none'
                                            },
                                            "text": {
                                                fill: "rgb(35,50,85,0.7) !important"
                                            }
                                        }}
                                    >
                                        <BarChart
                                            dataset={dataset}
                                            xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                                            series={[
                                                { dataKey: 'london', label: 'London', valueFormatter },
                                                { dataKey: 'paris', label: 'Paris', valueFormatter },
                                            ]}
                                            {...chartSetting}
                                        />
                                    </StyleBoxCardGrap>
                                </StyleDashboardCardGrap>
                            </Grid>
                            <StyleTable>
                                <StyleHeadTable>
                                    <StyleTitleTable>Recently registered users</StyleTitleTable>
                                    <StyleViewAllTable>view all users</StyleViewAllTable>
                                </StyleHeadTable>
                                <TableContainer component={Paper}>
                                    <Table aria-label="simple table"
                                        sx={{
                                            minWidth: 650,
                                            ".MuiTableCell-sizeMedium": {
                                                fontSize: "14px",
                                                color: 'rgb(35,50,85,0.5)',
                                                background: 'white'
                                            },
                                        }}
                                    >
                                        <TableHead
                                            sx={{
                                                ".MuiTableCell-head": {
                                                    color: "rgb(35,50,85,0.8)",
                                                    fontSize: "14px",
                                                },
                                                ".MuiTableRow-head": {
                                                    background: 'white'
                                                }
                                            }}
                                        >
                                            <TableRow>
                                                <TableCell>Name</TableCell>
                                                <TableCell align="right">ID</TableCell>
                                                <TableCell align="right">Role</TableCell>
                                                <TableCell align="right">Gender</TableCell>
                                                <TableCell align="right">Email</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody
                                            sx={{
                                                ".MuiTableCell-root": {
                                                    border: '5px solid #f4f4f4 !important',
                                                    boxShadow: "0 0 9px 6px #d2d2d245",
                                                }
                                            }}
                                        >
                                            {rows.map((row) => (
                                                <TableRow
                                                    key={row.name}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        {row.name}
                                                    </TableCell>
                                                    <TableCell align="right">{row.id}</TableCell>
                                                    <TableCell align="right">{row.role}</TableCell>
                                                    <TableCell align="right">{row.gender}</TableCell>
                                                    <TableCell align="right">{row.email}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </StyleTable>
                        </StyleContent>

                        <NavLeft />
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