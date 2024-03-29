"use client"
import { Box } from "@mui/system";
import { Fragment, useEffect, useRef, useState } from "react";
import { StyleBoxBtn } from "./style-mui";
import { GridColDef } from "@mui/x-data-grid";
import { StyleBoxContact, StyleBoxContent, StyleBtnDelete, StyleBtnEdit, StyleCountStu, StyleDetailStudent, StyleMainContent, StyleTitleContent, StyleTitleDetailStu } from "../People/style-mui";
import Drawer from '@mui/material/Drawer';
import DrawerClass from "@/components/drawerClass/page";

type detailStuType = { title: string; content: any; }
type Anchor = 'top' | 'left' | 'bottom' | 'right';
export default function ClassExtra() {
    const [stateDrawer, setStateDrawer] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
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

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: '50vw' }}
            role="presentation"
            // onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <DrawerClass data={detailStu} />
        </Box>
    );

    const elementRef = useRef<HTMLDivElement | null>(null);
    const [elementWidth, setElementWidth] = useState<number | 1000>(1000);
    const [detailStu, SetDetailStu] = useState<detailStuType[]>([]);
    const [rows, SetRows] = useState<any[]>([]);
    const [students, setStudents] = useState<any>([]);

    useEffect(() => {
        setStudents([{
            id: 1,
            name: "10A1",
            course: "Khoa học tự nhiên (A)",
            basis: "Nghi Xuân",
            operate: "Offline",
            state: "Running",
            start: "24/02/2024",
            countTime: 28,
            lecturer: "nqchung",
            countStudent: 4,
            countTeacher: 2,
            mostLesson: 1,
            createAt: "19/02/2024",
            updateAt: "19/02/2024"
        },
        {
            id: 2,
            name: "10A1",
            course: "Khoa học tự nhiên (A)",
            basis: "Nghi Xuân",
            operate: "Hybird",
            state: "Running",
            start: "24/02/2024",
            countTime: 28,
            lecturer: "nqchung",
            countStudent: 4,
            countTeacher: 2,
            mostLesson: 1,
            createAt: "19/02/2024",
            updateAt: "19/02/2024"
        },
        {
            id: 3,
            name: "10A1",
            course: "Khoa học tự nhiên (A)",
            basis: "Nghi Xuân",
            operate: "Hybird",
            state: "Running",
            start: "24/02/2024",
            countTime: 28,
            lecturer: "nqchung",
            countStudent: 4,
            countTeacher: 2,
            mostLesson: 1,
            createAt: "19/02/2024",
            updateAt: "19/02/2024"
        },
        {
            id: 4,
            name: "10A1",
            course: "Khoa học tự nhiên (A)",
            basis: "Nghi Xuân",
            operate: "Hybird",
            state: "Running",
            start: "24/02/2024",
            countTime: 28,
            lecturer: "nqchung",
            countStudent: 4,
            countTeacher: 2,
            mostLesson: 1,
            createAt: "19/02/2024",
            updateAt: "19/02/2024"
        },
        {
            id: 5,
            name: "10A1",
            course: "Khoa học tự nhiên (A)",
            basis: "Nghi Xuân",
            operate: "Hybird",
            state: "Running",
            start: "24/02/2024",
            countTime: 28,
            lecturer: "nqchung",
            countStudent: 4,
            countTeacher: 2,
            mostLesson: 1,
            createAt: "19/02/2024",
            updateAt: "19/02/2024"
        },
        {
            id: 6,
            name: "10A1",
            course: "Khoa học tự nhiên (A)",
            basis: "Nghi Xuân",
            operate: "Hybird",
            state: "Running",
            start: "24/02/2024",
            countTime: 28,
            lecturer: "nqchung",
            countStudent: 4,
            countTeacher: 2,
            mostLesson: 1,
            createAt: "19/02/2024",
            updateAt: "19/02/2024"
        },
        {
            id: 7,
            name: "10A1",
            course: "Khoa học tự nhiên (A)",
            basis: "Nghi Xuân",
            operate: "Hybird",
            state: "Running",
            start: "24/02/2024",
            countTime: 28,
            lecturer: "nqchung",
            countStudent: 4,
            countTeacher: 2,
            mostLesson: 1,
            createAt: "19/02/2024",
            updateAt: "19/02/2024"
        },
        {
            id: 8,
            name: "10A1",
            course: "Khoa học tự nhiên (A)",
            basis: "Nghi Xuân",
            operate: "Hybird",
            state: "Running",
            start: "24/02/2024",
            countTime: 28,
            lecturer: "nqchung",
            countStudent: 4,
            countTeacher: 2,
            mostLesson: 1,
            createAt: "19/02/2024",
            updateAt: "19/02/2024"
        },
        {
            id: 9,
            name: "10A1",
            course: "Khoa học tự nhiên (A)",
            basis: "Nghi Xuân",
            operate: "Offline",
            state: "Running",
            start: "24/02/2024",
            countTime: 28,
            lecturer: "nqchung",
            countStudent: 4,
            countTeacher: 2,
            mostLesson: 1,
            createAt: "19/02/2024",
            updateAt: "19/02/2024"
        },
        {
            id: 10,
            name: "10A1",
            course: "Khoa học tự nhiên (A)",
            basis: "Nghi Xuân",
            operate: "Offline",
            state: "Running",
            start: "24/02/2024",
            countTime: 28,
            lecturer: "nqchung",
            countStudent: 4,
            countTeacher: 2,
            mostLesson: 1,
            createAt: "19/02/2024",
            updateAt: "19/02/2024"
        },
        {
            id: 11,
            name: "10A1",
            course: "Khoa học tự nhiên (A)",
            basis: "Nghi Xuân",
            operate: "Offline",
            state: "Running",
            start: "24/02/2024",
            countTime: 28,
            lecturer: "nqchung",
            countStudent: 4,
            countTeacher: 2,
            mostLesson: 1,
            createAt: "19/02/2024",
            updateAt: "19/02/2024"
        }])
    }, [])

    useEffect(() => {
        SetDetailStu([{
            title: 'ref id',
            content: students[0]?.id,
        },
        {
            title: 'name',
            content: students[0]?.name,
        },
        {
            title: 'course',
            content: students[0]?.course,
        },
        {
            title: 'operate',
            content: students[0]?.operate,
        },
        {
            title: 'state',
            content: students[0]?.state,
        },
        {
            title: 'start',
            content: students[0]?.start,
        },
        {
            title: 'countTime',
            content: students[0]?.countTime,
        },
        {
            title: 'mostLesson',
            content: students[0]?.mostLesson,
        },
        {
            title: 'countStudent',
            content: students[0]?.countStudent,
        },
        {
            title: 'countTeacher',
            content: students[0]?.countTeacher,
        },
        {
            title: 'lecturer',
            content: students[0]?.lecturer,
        },
        {
            title: 'createAt',
            content: students[0]?.createAt,
        },
        {
            title: 'updateAt',
            content: students[0]?.updateAt,
        }
        ]);
        SetRows(students)
    }, [students])

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
            field: 'createAt',
            headerName: 'CA',
        },
        {
            field: 'updateAt',
            headerName: 'LUA',
        }
    ];

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
        let findStu = students.filter((student: any) => student.id === id)
        findStu = findStu[0];

        SetDetailStu([{
            title: 'ref id',
            content: findStu?.id,
        },
        {
            title: 'name',
            content: findStu?.name,
        },
        {
            title: 'course',
            content: findStu?.course,
        },
        {
            title: 'operate',
            content: findStu?.operate,
        },
        {
            title: 'state',
            content: findStu?.state,
        },
        {
            title: 'start',
            content: findStu?.start,
        },
        {
            title: 'countTime',
            content: findStu?.countTime,
        },
        {
            title: 'mostLesson',
            content: findStu?.mostLesson,
        },
        {
            title: 'countStudent',
            content: findStu?.countStudent,
        },
        {
            title: 'countTeacher',
            content: findStu?.countTeacher,
        },
        {
            title: 'lecturer',
            content: findStu?.lecturer,
        },
        {
            title: 'createAt',
            content: findStu?.createAt,
        },
        {
            title: 'updateAt',
            content: findStu?.updateAt,
        }]);

    };
    return (
        <StyleDetailStudent>
            <StyleTitleDetailStu>Class Details</StyleTitleDetailStu>
            <StyleBoxContact>
                {
                    detailStu.map((student, index) => (
                        <StyleBoxContent key={index}>
                            <StyleTitleContent>{student.title}</StyleTitleContent>
                            <StyleMainContent color={(student.title === "email" || student.title === "address") ? "#7FBDE4" : (student.title === "student status" ? (student.content === "ACTIVE" ? "#84DE88" : "#F62B2B") : "rgb(35,50,85,0.8)")}>{student.content}</StyleMainContent>
                        </StyleBoxContent>
                    ))
                }
            </StyleBoxContact>
            <StyleBoxBtn>
                <Fragment key="right">
                    <StyleBtnEdit onClick={toggleDrawer('right', true)} variant="outlined">SHOW</StyleBtnEdit>
                    <Drawer
                        anchor="right"
                        open={stateDrawer['right']}
                        onClose={toggleDrawer('right', false)}
                    >
                        {list('right')}
                    </Drawer>
                </Fragment>
            </StyleBoxBtn>

        </StyleDetailStudent>
    );
}