import HeaderPhone from "@/components/SizePhone/header";
import { StyleBoxCardGrap, StyleContent, StyleDashboardCardGrap, StyleHeadTable, StyleTable, StyleTitleGrap, StyleTitleTable, StyleViewAllTable } from "../style-mui";
import BasisSynthesis from "@/components/basisSynthesis";
import { Accordion, AccordionDetails, AccordionSlots, AccordionSummary, Fade, Grid, Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { GridExpandMoreIcon } from "@mui/x-data-grid";
import { BarChart, LineChart } from "@mui/x-charts";
import OverviewExtra from "./extra";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { checkLogin } from "@/api/readtime";
import { axisClasses } from '@mui/x-charts';
import { Request } from "@/api/request";
import { usePathname, useRouter } from "next/navigation";

interface createData {
    name: string,
    id: string,
    role: string,
    gender: string,
    email: string,
}

export default function OverviewMain() {
    const [detailUsers, setDetailUsers] = useState<any>(null);
    const [rows, setRows] = useState<createData[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<any>(null);
    const dispatch = useDispatch();
    const pathname = usePathname();
    const router = useRouter();
    const width = useSelector((state: any) => state.display.width);
    const [expanded, setExpanded] = useState(false);

    const handleExpansion = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };

    useEffect(() => {
        const handleCheckCookie = async () => {
            const userInfo = await checkLogin();
            setLoading(false);
            if (userInfo) {
                setUser(userInfo);
                console.log(pathname);

                if (pathname === "/Overview") {
                    const usersInfo = await Request.get(`/users/page?page=1&show=4&search=`);
                    let countMale = 0;
                    let countFemale = 0;
                    let rowsFake: createData[] = [];

                    usersInfo.data.map((item: any) => {
                        if (item.gender === "male" && item.role === "student") countMale += 1;
                        else if (item.role === "student") {
                            countFemale += 1;
                        }
                        rowsFake.push(createData(item.fullName, item.id, item.role, item.gender, item.email));
                    });
                    setDetailUsers({
                        gender: {
                            sum: countFemale + countMale,
                            male: countMale,
                            female: countFemale
                        }
                    });
                    setRows(rowsFake);
                }
                router.push(pathname);
                return;
            } else {
                router.push('/login');
            }
        };
        handleCheckCookie();
    }, []);

    function createData(
        name: string,
        id: string,
        role: string,
        gender: string,
        email: string,
    ) {
        return { name, id, role, gender, email };
    }
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
    return (
        <StyleContent
            sx={{
                ".MuiPaper-root": {
                    margin: '0 !important'
                },
            }}
        >
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
                            expandIcon={<GridExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <StyleTitleGrap>Basic synthesis</StyleTitleGrap>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                ".MuiGrid-root": {
                                    margin: '0',
                                    width: '100%'
                                }
                            }}
                        >
                            <BasisSynthesis data={detailUsers} />
                        </AccordionDetails>
                    </Accordion>
            }
            <Grid container spacing={2}
                sx=
                {{
                    gap: '20px',
                    justifyContent: 'space-between',
                    margin: '0',
                    width: '100%',
                    ".MuiGrid-root": {
                        padding: '10px 0 0 0'
                    }
                }}
            >
                <StyleDashboardCardGrap item md={6.5} xs={12}
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
                    <StyleViewAllTable href="./User">view all users</StyleViewAllTable>
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
            {width === "xs" && <OverviewExtra />}
        </StyleContent>
    );
}