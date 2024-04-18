"use client"
import { Box } from "@mui/system";
import { Fragment, useEffect, useRef, useState } from "react";
import { StyleBoxBtn, StyleTapClass } from "./style-mui";
import { GridColDef } from "@mui/x-data-grid";
import { StyleBoxContact, StyleBoxContent, StyleBtnDelete, StyleBtnEdit, StyleColumnGap30, StyleCountStu, StyleDetailStudent, StyleMainContent, StyleTitleContent, StyleTitleDetailStu } from "../People/style-mui";
import Drawer from '@mui/material/Drawer';
import { useSelector } from "react-redux";
import { LinearProgress } from "@mui/material";
import DrawerClass from "@/components/drawer/drawerClass/page";

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
        <StyleTapClass
            role="presentation"
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <DrawerClass />
        </StyleTapClass>
    );

    const elementRef = useRef<HTMLDivElement | null>(null);
    const [elementWidth, setElementWidth] = useState<number | 1000>(1000);
    const [detailStu, SetDetailStu] = useState<detailStuType[]>([]);
    const dataClass = useSelector((state: any) => state.people.data);

    useEffect(() => {
        if (dataClass) {
            SetDetailStu([{
                title: 'ref id',
                content: dataClass.id,
            },
            {
                title: 'name',
                content: dataClass.name,
            },
            {
                title: 'course',
                content: dataClass.course,
            },
            {
                title: 'operate',
                content: dataClass.operate,
            },
            {
                title: 'state',
                content: dataClass.state,
            },
            {
                title: 'start',
                content: dataClass.start,
            },
            {
                title: 'countTime',
                content: dataClass.countTime,
            },
            {
                title: 'mostLesson',
                content: dataClass.mostLesson,
            },
            {
                title: 'countStudent',
                content: dataClass.countStudent,
            },
            {
                title: 'countTeacher',
                content: dataClass.countTeacher,
            },
            {
                title: 'lecturer',
                content: dataClass.lecturer,
            },
            {
                title: 'createdAt',
                content: dataClass.createdAt,
            },
            {
                title: 'updatedAt',
                content: dataClass.updatedAt,
            }
            ]);
        }
    }, [dataClass])

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
    return (
        <StyleDetailStudent>
            <StyleColumnGap30>
                <StyleTitleDetailStu>Class Details</StyleTitleDetailStu>
                {
                    detailStu && detailStu.length > 0 ? <>
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
                    </> : <LinearProgress color="inherit" />
                }
            </StyleColumnGap30>
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