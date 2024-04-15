"use client"
import { Box } from "@mui/system";
import { StyleContent } from "../style-mui";
import { useEffect, useRef, useState } from "react";
import { Grid, LinearProgress } from "@mui/material";
import { StyleBoxSearch, StyleBoxSearch2, StyleBoxTable, StyleButton, StyleInputSelect, StyleInputText, StyleTextP } from "./style-mui";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import RefreshIcon from '@mui/icons-material/Refresh';
import ClearIcon from '@mui/icons-material/Clear';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { StyleCountStu } from "../People/style-mui"; import { GetClass } from "@/api/class";
import { useDispatch } from "react-redux";
import { PeopleActions } from "@/redux/people";
interface ClassData {
    id: string;
    name: string;
    basis: string;
    course: string;
    operate: string;
    countTime: number;
    start: string;
    mostLesson: number;
    countTeacher: number;
    countStudent: number;
    lecturer: string;
    createdAt: string;
    updatedAt: string;
}
interface Props {
    classSend: any[];
}
type Anchor = 'top' | 'left' | 'bottom' | 'right';
export default function ClassMain(props: { classSend: any }) {
    const elementRef = useRef<HTMLDivElement | null>(null);
    const [elementWidth, setElementWidth] = useState<number | 1000>(1000);
    const [rows, setRows] = useState<ClassData[]>([]);

    const dispatch = useDispatch();

    useEffect(() => {
        if (props.classSend && props.classSend.length > 0) {
            const dataFake: ClassData[] = props.classSend.map((item: any) => ({
                id: item.id,
                name: item.name,
                basis: item.basis,
                course: item.course,
                operate: item.operate,
                countTime: item.countTime,
                start: item.start,
                state: item.state,
                mostLesson: item.mostLesson,
                countTeacher: item.teachers.length,
                countStudent: item.students.length,
                lecturer: item.teachers[0] || "",
                createdAt: item.createdAt,
                updatedAt: item.updatedAt
            }));
            setRows(dataFake);
            dispatch(PeopleActions.setPeople(dataFake[0]));
        }
    }, [props.classSend]);

    useEffect(() => {
        if (elementRef.current) {
            setElementWidth(elementRef.current.clientWidth);
        }
    }, []);

    const [basis, setBasis] = useState([
        {
            id: 1,
            name: 'Nghi Xuân'
        },
        {
            id: 2,
            name: 'Kỳ Anh'
        },
        {
            id: 3,
            name: 'TP Hà Tĩnh'
        },
    ])

    const [operate, setOperate] = useState([
        {
            id: 1,
            name: "Online"
        },
        {
            id: 2,
            name: "Offline"
        },
        {
            id: 3,
            name: "Hybird"
        },
    ])

    const [course, setCourse] = useState([
        {
            id: 'A',
            name: "Khoa học tự nhiên (A)"
        },
        {
            id: 'C',
            name: "Khoa học xã hội (C)"
        },
        {
            id: 'D',
            name: "Khoa học xã hội (D)"
        },
    ])

    const [state, setState] = useState([
        {
            name: "New"
        },
        {
            name: "Running"
        },
        {
            name: "Finished"
        },
        {
            name: "Pending"
        },
        {
            name: "Preparing"
        },
    ])

    const [teacher, setTeacher] = useState([
        {
            id: '1',
            name: "Nguyễn Quốc Chung"
        },
        {
            id: '2',
            name: "Liorion Nguyễn"
        },
        {
            id: '3',
            name: "Tuấn Nguyễn"
        },
        {
            id: '4',
            name: "Liên Tuấn Anh"
        },
        {
            id: '5',
            name: "Hoàng Minh Nhi"
        }
    ])

    const handleShowStudent = (id: string) => {
        let findStu: ClassData | undefined = undefined;
        if (rows) {
            const foundStudents = rows.filter((student: ClassData) => student.id === id);
            if (foundStudents.length > 0) {
                findStu = foundStudents[0];
                dispatch(PeopleActions.setPeople(findStu));
            }
        }
    };


    const handleChange = (e: any) => {
    };

    const columns: GridColDef[] = [
        {
            field: 'name',
            headerName: 'Tên',
        },
        {
            field: 'course',
            headerName: 'Khoá học',
        },
        {
            field: 'operate',
            headerName: 'Phương thức vận hành',
        },
        {
            field: 'state',
            headerName: 'Trạng thái',
        },
        {
            field: 'start',
            headerName: 'Bắt đầu',
        },
        {
            field: 'countTime',
            headerName: 'Giờ',
        },
        {
            field: 'mostLesson',
            headerName: 'LSC',
        },
        {
            field: 'countStudent',
            headerName: 'SC',
        },
        {
            field: 'countTeacher',
            headerName: 'TC',
        },
        {
            field: 'lecturer',
            headerName: 'UC',
        },
        {
            field: 'createdAt',
            headerName: 'CA',
        },
        {
            field: 'updatedAt',
            headerName: 'LUA',
        }
    ];

    const [stateDrawer, setStateDrawer] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setStateDrawer({ ...stateDrawer, [anchor]: open });
        };
    return (
        <StyleContent>
            <h3>Class</h3>
            <Grid container spacing={2}>
                <StyleBoxSearch item xs={2} md={2}>
                    <StyleTextP>Tìm kiếm</StyleTextP>
                    <StyleInputText placeholder="Tìm kiếm lớp" />
                </StyleBoxSearch>
                <StyleBoxSearch item xs={2} md={2}>
                    <StyleTextP>Cơ sở</StyleTextP>
                    <StyleInputSelect onChange={handleChange}>
                        {basis.map(item => (
                            <option key={item.id} value={item.id}>
                                {item.name}
                            </option>
                        ))}
                    </StyleInputSelect>
                </StyleBoxSearch>
                <StyleBoxSearch item xs={2} md={2}>
                    <StyleTextP>Phương thức vận hành</StyleTextP>
                    <StyleInputSelect onChange={handleChange}>
                        {operate.map(item => (
                            <option key={item.id} value={item.id}>
                                {item.name}
                            </option>
                        ))}
                    </StyleInputSelect>
                </StyleBoxSearch>
                <StyleBoxSearch item xs={2} md={2}>
                    <StyleTextP>Courses</StyleTextP>
                    <StyleInputSelect onChange={handleChange}>
                        {course.map(item => (
                            <option key={item.id} value={item.id}>
                                {item.name}
                            </option>
                        ))}
                    </StyleInputSelect>
                </StyleBoxSearch>
                <StyleBoxSearch item xs={2} md={2}>
                    <StyleTextP>Ngày bắt đầu</StyleTextP>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoItem>
                            <MobileDatePicker defaultValue={dayjs('2022-04-17')}
                                sx={{
                                    ".MuiInputBase-input": {
                                        padding: '8px',
                                        color: 'grey'
                                    }
                                }}
                            />
                        </DemoItem>
                    </LocalizationProvider>
                </StyleBoxSearch>
                <StyleBoxSearch item xs={2} md={2}>
                    <StyleTextP>Ngày kết thúc</StyleTextP>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoItem>
                            <MobileDatePicker defaultValue={dayjs('2022-04-17')}
                                sx={{
                                    ".MuiInputBase-input": {
                                        padding: '8px',
                                        color: 'grey'
                                    }
                                }}
                            />
                        </DemoItem>
                    </LocalizationProvider>
                </StyleBoxSearch>
                <StyleBoxSearch item xs={2} md={2}>
                    <StyleTextP>Trạng thái</StyleTextP>
                    <StyleInputSelect onChange={handleChange}>
                        {state.map(item => (
                            <option key={item.name} value={item.name}>
                                {item.name}
                            </option>
                        ))}
                    </StyleInputSelect>
                </StyleBoxSearch>
                <StyleBoxSearch item xs={2} md={2}>
                    <StyleTextP>Giảng viên</StyleTextP>
                    <StyleInputSelect onChange={handleChange}>
                        {teacher.map(item => (
                            <option key={item.id} value={item.id}>
                                {item.name}
                            </option>
                        ))}
                    </StyleInputSelect>
                </StyleBoxSearch>
                <StyleBoxSearch2 item xs={2} md={2}>
                    <StyleButton variant="contained"><RefreshIcon /> Làm mới</StyleButton>
                </StyleBoxSearch2>
                <StyleBoxSearch2 item xs={2} md={2}>
                    <StyleButton variant="contained"><ClearIcon /> Xoá</StyleButton>
                </StyleBoxSearch2>
            </Grid>
            <StyleBoxTable>
                {
                    rows && rows.length > 0 ? <><DataGrid
                        onRowClick={(e: any) => handleShowStudent(e.id)}
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 10,
                                },
                            },
                        }}
                        pageSizeOptions={[5]}
                        checkboxSelection
                        disableRowSelectionOnClick
                    />
                        <StyleCountStu>Showing 1 - 10 of {rows.length} </StyleCountStu></> : <LinearProgress />
                }

            </StyleBoxTable>
        </StyleContent>
    );
}