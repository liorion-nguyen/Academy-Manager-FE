"use client"
import { Box, display } from "@mui/system";
import { Accordion, AccordionDetails, AccordionSlots, AccordionSummary, Button, Grid, LinearProgress, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useTheme } from "@mui/material";
import { StyleGridLeft, StyleGridUserNotification, StyleCalendarEvent, StyleEvent, StyleH3TitleEvent, StyleBoxButton, StyleBoxNote, StyleContentNote, StyleTitleNote, StyleTimeNote, StyleNote, StyleCalendar, StyleComponent, StyleGridRight, StyleNavLeft, StyleIconNavLeft, StyleBoxIconNavLeft, StyleBoxHeader, StyleLinkPoint, StyleTypographyPoint, StyleContent, StyleSearch, StyleInpSearch, StyleHeaderTop, StyleDashboardCard, StyleCircle, StyleProcessBar, StyleTitleCard, StyleContentCard, StyleSumCoundCard, StyleBoxIndexFirst, StyleBoxIndexSecond, StyleRowGap5, StyleRowGap20, StyleColumnGap10, StyleTitleGrap, StyleDashboardCardGrap, StyleBoxCardGrap, StyleTable, StyleTitleTable, StyleViewAllTable, StyleHeadTable } from "../style-mui";
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
import { usePathname, useRouter } from "next/navigation";
import { checkLogin } from "@/api/readtime";
import NavLeft from "@/components/navleft";
import Header from "@/components/header";
import { SpeedInsights } from "@vercel/speed-insights/next";
import MenuUser from "@/components/menuUser/page";
import ChatAiMain from "../ChatAi/main";
import { StyleMain } from "../Login/style-mui";
import PeopleMain from "../People/main";
import PeopleExtra from "../People/extra";
import ClassMain from "../Class/main";
import ClassExtra from "../Class/extra";
import ChatAiExtra from "../ChatAi/extra";
import { GetUsers } from "@/api/user";
import { GetClass } from "@/api/class";
import UserMain from "../User/main";
import UserExtra from "../User/extra";
import { useDispatch, useSelector } from "react-redux";
import { DisplayActions } from "@/redux/display";
import HeaderPhone from "@/components/SizePhone/header";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import BasisSynthesis from "@/components/basisSynthesis";
interface createData {
    name: string,
    id: string,
    role: string,
    gender: string,
    email: string,
}
export default function Overview({ params }: any) {
    const [user, setUser] = useState<any>(null);
    const [detailUsers, setDetailUsers] = useState<any>(null);
    const [timer, setTimer] = useState<Date>(new Date());
    const [classData, setClassData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    function createData(
        name: string,
        id: string,
        role: string,
        gender: string,
        email: string,
    ) {
        return { name, id, role, gender, email };
    }

    const [rows, setRows] = useState<createData[] | null>(null);

    useEffect(() => {
        const handleGetClass = async () => {
            const classFake = await GetClass();
            setClassData(classFake);
        }
        handleGetClass();
    }, [])

    useEffect(() => {
        const handleCheckCookie = async () => {
            const userInfo = await checkLogin();
            setLoading(false);
            if (userInfo) {
                setUser(userInfo);
                if (title === "Overview") {
                    const usersInfo = await GetUsers();
                    let countMale = 0;
                    let rowsFake: createData[] = [];
                    usersInfo.map((item: any) => {
                        if (item.gender === "male") countMale += 1;
                        rowsFake.push(createData(item.fullName, item.id, item.role, item.gender, item.email));
                    });
                    setDetailUsers({
                        gender: {
                            sum: usersInfo.length,
                            male: countMale,
                            female: usersInfo.length - countMale
                        }
                    });
                    setRows(rowsFake);
                }
                router.push(`/${title}`);
                return;
            } else {
                router.push('/login');
            }
        };
        handleCheckCookie();
    }, []);
    var title = params.Overview;
    const router = useRouter();
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

    const [timeNote, setTimeNote] = useState("all");
    const handleChangeTimeNote = (value: string) => {
        setTimeNote(value);
    }

    const elementRef = useRef<HTMLDivElement | null>(null);
    const [elementWidth, setElementWidth] = useState<number | null>(null);

    useEffect(() => {
        const updateWidth = () => {
            if (elementRef.current) {
                setElementWidth(elementRef.current.clientWidth);
            }
        };
        updateWidth();
        const resizeListener = () => {
            window.addEventListener('resize', updateWidth);
            return () => {
                window.removeEventListener('resize', updateWidth);
            };
        };
        resizeListener();
    }, [elementRef, elementWidth]);

    const pathname = usePathname();
    const getScreenSize = () => {
        const width = document.documentElement.clientWidth;

        if (width < 576) {
            return 'xs';
        } else if (width < 768) {
            return 'sm';
        } else if (width < 992) {
            return 'md';
        } else if (width < 1200) {
            return 'lg';
        } else {
            return 'xl';
        }
    };
    useEffect(() => {
        dispatch(DisplayActions.setWidth(getScreenSize()));
    }, [document.documentElement.clientWidth])
    const width = useSelector((state: any) => state.display.width);
    const [expanded, setExpanded] = useState(false);

    const handleExpansion = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };
    return (
        <>
            <SpeedInsights />
            <StyleComponent>
                <StyleMain>
                    <StyleGridUserNotification container spacing={2}>
                        <StyleGridRight item sm={8.75} xs={12} ref={elementRef}>
                            <Header value={elementWidth} />
                            {pathname === "/Student" && <PeopleMain people="Student" />}
                            {pathname === "/Teacher" && <PeopleMain people="Teacher" />}
                            {pathname === "/Class" && <ClassMain classSend={classData} />}
                            {pathname === "/ChatAi" && <ChatAiMain />}
                            {pathname === "/User" && <UserMain />}
                            {(pathname === "/Overview") && <StyleContent>
                                {width === "xs" && <HeaderPhone />}

                                {
                                    width !== "xs" ? <BasisSynthesis data={detailUsers} /> :
                                        <Accordion
                                            expanded={expanded}
                                            onChange={handleExpansion}
                                            slots={{ transition: Fade as AccordionSlots['transition'] }}
                                            slotProps={{ transition: { timeout: 400 } }}
                                            sx={{
                                                '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
                                                '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
                                                '.MuiButtonBase-root': {
                                                    padding: '0'
                                                },
                                                boxShadow: '0'
                                            }}
                                        >
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1-content"
                                                id="panel1-header"
                                            >
                                                <StyleTitleGrap>Basic synthesis</StyleTitleGrap>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <BasisSynthesis data={detailUsers} />
                                            </AccordionDetails>
                                        </Accordion>
                                }
                                <Grid container spacing={2}>
                                    <StyleDashboardCardGrap item md={7} xs={12}
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
                                    <StyleDashboardCardGrap item md={5} xs={12}>
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
                                        <StyleViewAllTable href="./Users">view all users</StyleViewAllTable>
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
                                                {
                                                    rows && Array.isArray(rows) && rows.length > 0 ? rows.map((row: any, index: number) => (
                                                        <TableRow
                                                            key={index}
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
                                                    )) :
                                                        Array.from({ length: 4 }).map((_, index) => (
                                                            <TableRow
                                                                key={index}
                                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                            >
                                                                <TableCell component="th" scope="row"><Skeleton width={140} height={25} /></TableCell>
                                                                <TableCell align="right"><Skeleton width={140} height={25} /></TableCell>
                                                                <TableCell align="right"><Skeleton width={140} height={25} /></TableCell>
                                                                <TableCell align="right"><Skeleton width={140} height={25} /></TableCell>
                                                                <TableCell align="right"><Skeleton width={140} height={25} /></TableCell>
                                                            </TableRow>
                                                        ))
                                                }

                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </StyleTable>
                            </StyleContent>}

                            <NavLeft />
                        </StyleGridRight>
                        <StyleGridLeft item sm={3} xs={12}>
                            {width !== "xs" && <MenuUser />}

                            {pathname === "/Student" && <PeopleExtra people="Student" />}
                            {pathname === "/Teacher" && <PeopleExtra people="Teacher" />}
                            {pathname === "/ChatAi" && width !== "xs" && <ChatAiExtra />}
                            {pathname === "/Class" && <ClassExtra />}
                            {pathname === "/User" && <UserExtra />}


                            {pathname === "/Overview" &&
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
                                                <StaticDatePicker defaultValue={dayjs(`${timer.getFullYear()}-${timer.getMonth()}-${timer.getDate()}`)} />
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
                                </StyleCalendarEvent>}

                        </StyleGridLeft>
                    </StyleGridUserNotification>
                </StyleMain >

            </StyleComponent>
        </>
    );
}