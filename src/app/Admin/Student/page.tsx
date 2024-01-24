"use client"
import { Box } from "@mui/system";
import { StyleMain } from "../../Login/style-mui";
import { StyleBoxUser, StyleGridLeft, StyleGridUserNotification, StyleBoxNotification, StyleImgLeft, StyleBoxAvatarUser, StyleNameUser, StyleBoxInBoxUser, StyleIconDown, StyleBoxUserDisplay, StyleComponent, StyleGridRight, StyleInpSearch } from "../style-mui";
import { useEffect, useRef, useState } from "react";
import { StyleBoxBtn, StyleBoxBtnHandle, StyleBoxContact, StyleBoxContent, StyleBtnDelete, StyleBtnEdit, StyleButton, StyleButtonCreate, StyleContent, StyleCountStu, StyleDetailStudent, StyleFilter, StyleMainContent, StyleSearch, StyleTitleContent, StyleTitleDetailStu } from "./style-mui";
import Header from "@/component/header/page";
import NavLeft from "@/component/navleft/page";
import { FormControl, Grid, MenuItem, Select } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
export default function Student() {
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

    const [detailStu, DetailStu] = useState([
        {
            title: "ref id",
            content: "stu432101f"
        },
        {
            title: "first name",
            content: "michelle"
        },
        {
            title: "last name",
            content: "livingston"
        },
        {
            title: "gender",
            content: "female"
        },
        {
            title: "email",
            content: "MICHELLELIVINGSTON@GMAIL.COM"
        },
        {
            title: "address",
            content: "no.11 tony ave shomolu lagos nigeria"
        },
        {
            title: "department",
            content: "technology"
        },
        {
            title: "class",
            content: "ss2"
        },
        {
            title: "date Created",
            content: "25TH september 2015"
        },
        {
            title: "student status",
            content: "CURRENT"
        },
    ]);
    const elementRef = useRef<HTMLDivElement | null>(null);
    const [elementWidth, setElementWidth] = useState<number | 1000>(1000);
    useEffect(() => {
        if (elementRef.current) {
            setElementWidth(elementRef.current.clientWidth);
        }
    }, []);
    const [age, setAge] = useState('');

    const handleChange = (event: any) => {
        setAge(event.target.value);
    };

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'Ref ID',
        },
        {
            field: 'firstName',
            headerName: 'First Name',
        },
        {
            field: 'lastName',
            headerName: 'Last Name',
        },
        {
            field: 'gender',
            headerName: 'Gender',
        },
        {
            field: 'department',
            headerName: 'Department',
            sortable: false,
        },
    ];

    const rows = [
        { id: "stu432101", lastName: 'Armstrong', firstName: 'Micheal', gender: "Male", department: "Science" },
        { id: "stu432102", lastName: 'Armstrong', firstName: 'Micheal', gender: "Female", department: "Technology" },
        { id: "stu432103", lastName: 'Lannister', firstName: 'Micheal', gender: "Male", department: "Technology" },
        { id: "stu432104", lastName: 'Armstrong', firstName: 'Micheal', gender: "Male", department: "Science" },
        { id: "stu432105", lastName: 'Targaryen', firstName: 'Micheal', gender: "Female", department: "Technology" },
        { id: "stu432106", lastName: 'Armstrong', firstName: 'Michesl', gender: "Male", department: "Science" },
        { id: "stu432107", lastName: 'Clifford', firstName: 'Micheal', gender: "Female", department: "Science" },
        { id: "stu432108", lastName: 'Armstrong', firstName: 'Micheal', gender: "Male", department: "Technology" },
        { id: "stu432109", lastName: 'Roxie', firstName: 'Micheal', gender: "Female", department: "Science" },
        { id: "stu432109", lastName: 'Roxie', firstName: 'Micheal', gender: "Female", department: "Science" },
    ];
    return (
        <StyleComponent>
            <StyleMain>
                <StyleGridUserNotification container spacing={2}>
                    <StyleGridRight item xs={9} ref={elementRef}
                        sx={{
                            ".search": {
                                display: 'none'
                            },
                        }}
                    >
                        <Header value={elementWidth} />

                        <StyleContent>
                            <StyleBoxBtnHandle>
                                <StyleButton variant="contained">PRINT</StyleButton>
                                <StyleButton variant="contained">EXPORT</StyleButton>
                                <StyleButtonCreate variant="contained">CREATE STUDENT</StyleButtonCreate>
                            </StyleBoxBtnHandle>
                            <StyleFilter container spacing={2}
                                sx={{
                                    "em": {
                                        color: 'rgb(35,50,85,0.8)',
                                        fontSize: '16px'
                                    },
                                    ".MuiInputBase-input": {
                                        background: 'white'
                                    },
                                    ".MuiFormControl-root": {
                                        width: '100%'
                                    },
                                    ".MuiOutlinedInput-notchedOutline": {
                                        border: '0.5px solid #E5E5E5 !important'
                                    }
                                }}
                            >
                                <Grid item xs={6}>
                                    <StyleSearch>
                                        <img src="/Images/admin/icon_search.svg" />
                                        <StyleInpSearch type="text" placeholder="Search..." />
                                    </StyleSearch>
                                </Grid>
                                <Grid item xs={2}>
                                    <FormControl>
                                        <Select
                                            value={age}
                                            onChange={handleChange}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                        >
                                            <MenuItem value="">
                                                <em>Gender</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Male</MenuItem>
                                            <MenuItem value={20}>Female</MenuItem>
                                            <MenuItem value={30}>Other</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={2}>
                                    <FormControl>
                                        <Select
                                            value={age}
                                            onChange={handleChange}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                        >
                                            <MenuItem value="">
                                                <em>Department</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Science</MenuItem>
                                            <MenuItem value={20}>Technology</MenuItem>
                                            <MenuItem value={30}>Other</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={2}>
                                    <FormControl>
                                        <Select
                                            value={age}
                                            onChange={handleChange}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                        >
                                            <MenuItem value="">
                                                <em>Date range</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ascending</MenuItem>
                                            <MenuItem value={20}>Descending</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </StyleFilter>
                            <Box
                                sx={{
                                    height: 'auto',
                                    maxHeight: '85%',
                                    width: '100%',
                                    ".MuiDataGrid-columnHeaderTitle": {
                                        color: "rgb(35,50,85,0.8)",
                                        fontSize: '15px'
                                    },
                                    ".MuiDataGrid-cellContent": {
                                        color: "rgb(35,50,85,0.7)",
                                        fontSize: '14px'
                                    },
                                    ".MuiDataGrid-columnHeaders": {
                                        background: "#F8F8F8",
                                        border: '0.5px solid rgb(35,50,85,0.1) !important'
                                    },
                                    ".MuiDataGrid-row": {
                                        background: 'white',
                                        border: '0.5px solid rgb(35,50,85,0.1) !important',
                                        width: '100% !important'
                                    },
                                    ".MuiDataGrid-virtualScrollerRenderZone": {
                                        width: '100% !important'
                                    },
                                    ".MuiSvgIcon-root": {
                                        width: '15px',
                                        height: '15px'
                                    },
                                    ".MuiCheckbox-root": {
                                        color: 'rgb(35,50,85,0.1)'
                                    },
                                    ".MuiDataGrid-cell[data-colindex='1']": {
                                        minWidth: "16% !important",
                                        maxWidth: "16% !important"
                                    },
                                    ".MuiDataGrid-cell[data-colindex='2']": {
                                        minWidth: "22% !important",
                                        maxWidth: "22% !important",
                                    },
                                    ".MuiDataGrid-cell[data-colindex='3']": {
                                        minWidth: "22% !important",
                                        maxWidth: "22% !important",
                                    },
                                    ".MuiDataGrid-cell[data-colindex='4']": {
                                        minWidth: "16% !important",
                                        maxWidth: "16% !important",
                                    },
                                    ".MuiDataGrid-cell[data-colindex='5']": {
                                        minWidth: "24% !important",
                                        maxWidth: "24% !important",
                                    },
                                    ".MuiDataGrid-columnHeader[aria-colindex='2']": {
                                        minWidth: "16% !important",
                                        maxWidth: "16% !important"
                                    },
                                    ".MuiDataGrid-columnHeader[aria-colindex='3']": {
                                        minWidth: "22% !important",
                                        maxWidth: "22% !important",
                                    },
                                    ".MuiDataGrid-columnHeader[aria-colindex='4']": {
                                        minWidth: "22% !important",
                                        maxWidth: "22% !important",
                                    },
                                    ".MuiDataGrid-columnHeader[aria-colindex='5']": {
                                        minWidth: "16% !important",
                                        maxWidth: "16% !important",
                                    },
                                    ".MuiDataGrid-columnHeader[aria-colindex='6']": {
                                        minWidth: "24% !important",
                                        maxWidth: "24% !important",
                                    },
                                    ".MuiDataGrid-columnHeadersInner": {
                                        width: '100%',
                                    },
                                    ".css-yrdy0g-MuiDataGrid-columnHeaderRow": {
                                        width: '100%'
                                    },
                                    ".MuiTablePagination-displayedRows": {
                                        display: 'none'
                                    },
                                    ".MuiDataGrid-virtualScrollerContent": {
                                        height: '45vh !important'
                                    }
                                    
                                }}
                            >
                                <StyleCountStu>Showing 1 - 10 of {rows.length} students</StyleCountStu>
                                <DataGrid
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
                            </Box>

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

                        <StyleDetailStudent>
                            <StyleTitleDetailStu>Student Details</StyleTitleDetailStu>
                            <StyleBoxContact>
                                {
                                    detailStu.map((student, index) => (
                                        <StyleBoxContent key={index}>
                                            <StyleTitleContent>{student.title}</StyleTitleContent>
                                            <StyleMainContent color={(student.title === "email" || student.title === "address") ? "#7FBDE4" : (student.title === "student status" ? (student.content === "CURRENT" ? "#84DE88" : "#F62B2B") : "rgb(35,50,85,0.8)")}>{student.content}</StyleMainContent>
                                        </StyleBoxContent>
                                    ))
                                }
                            </StyleBoxContact>
                            <StyleBoxBtn>
                                <StyleBtnEdit variant="outlined">EDIT</StyleBtnEdit>
                                <StyleBtnDelete variant="outlined">DELETE</StyleBtnDelete>
                            </StyleBoxBtn>

                        </StyleDetailStudent>

                    </StyleGridLeft>
                </StyleGridUserNotification>
            </StyleMain >
        </StyleComponent>
    );
}