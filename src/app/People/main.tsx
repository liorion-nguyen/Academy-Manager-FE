"use client"
import { Box } from "@mui/system";
import { StyleBoxUser, StyleGridLeft, StyleGridUserNotification, StyleBoxNotification, StyleImgLeft, StyleBoxAvatarUser, StyleNameUser, StyleBoxInBoxUser, StyleIconDown, StyleBoxUserDisplay, StyleComponent, StyleGridRight, StyleInpSearch } from "../style-mui";
import { useEffect, useRef, useState } from "react";
import { StyleBoxBtn, StyleBoxBtnHandle, StyleBoxContact, StyleBoxContent, StyleBtnDelete, StyleBtnEdit, StyleButton, StyleButtonCreate, StyleContent, StyleCountStu, StyleDetailStudent, StyleFilter, StyleMainContent, StyleSearch, StyleTitleContent, StyleTitleDetailStu } from "./style-mui";
import { FormControl, Grid, MenuItem, Select } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Request } from "@/api/request";
import Image from "next/image";

type detailStuType = { title: string; content: any; }
export default function PeopleMain(props: { people: string }) {
    var title = props.people;

    const [detailStu, SetDetailStu] = useState<detailStuType[]>([]);
    const [rows, SetRows] = useState<any[]>([]);
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

    const [students, setStudents] = useState<any>([]);

    useEffect(() => {
        let fetchData = async () => {
            setStudents(await Request.get(`/users/roles/${title === "Student" ? 'Học sinh' : 'Giáo viên'}`));
        }
        fetchData();
    }, [title]);

    useEffect(() => {
        SetDetailStu([
            {
                title: "ref id",
                content: students[0]?.id
            },
            {
                title: "first name",
                content: students[0]?.fullName.split(' ')[0]
            },
            {
                title: "last name",
                content: students[0]?.fullName.split(' ').slice(1).join(' ')
            },
            {
                title: "gender",
                content: students[0]?.gender
            },
            {
                title: "email",
                content: students[0]?.email
            },
            {
                title: "address",
                content: students[0]?.address ? students[0]?.address : "Null"
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
                content: students[0]?.createdAt
            },
            {
                title: title === "Student" ? "student status" : "teacher status",
                content: students[0]?.isActive ? "ACTIVE" : "INACTIVE"
            },
        ]);
        let listStudent: any[] = [];
        students && students.map((student: any) => {
            listStudent.push({ id: student.id, lastName: student.fullName.split(' ')[0], firstName: student.fullName.split(' ').slice(1).join(' '), gender: student.gender, department: "Science" },)
        })
        SetRows(listStudent);
    }, [students])

    const handleShowStudent = (id: string) => {
        let findStu = students.filter((student: any) => student.id === id)
        findStu = findStu[0];

        SetDetailStu([
            {
                title: "ref id",
                content: findStu?.id
            },
            {
                title: "first name",
                content: findStu?.fullName.split(' ')[0]
            },
            {
                title: "last name",
                content: findStu?.fullName.split(' ').slice(1).join(' ')
            },
            {
                title: "gender",
                content: findStu?.gender
            },
            {
                title: "email",
                content: findStu?.email
            },
            {
                title: "address",
                content: findStu?.address ? findStu?.address : "Null"
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
                content: findStu?.createdAt
            },
            {
                title: title === "Student" ? "student status" : "teacher status",
                content: findStu?.isActive ? "ACTIVE" : "INACTIVE"
            },
        ]);
    };

    return (
        <StyleContent>
            <StyleBoxBtnHandle>
                <StyleButton variant="contained">PRINT</StyleButton>
                <StyleButton variant="contained">EXPORT</StyleButton>
                <StyleButtonCreate variant="contained">{title === "Student" ? "CREATE STUDENT" : "CREATE TEACHER"}</StyleButtonCreate>
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
                        <Image alt="#" src="/Images/admin/icon_search.svg" />
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
                <StyleCountStu>Showing 1 - 10 of {rows.length} {title === "Student" ? "students" : "teachers"}</StyleCountStu>
                <DataGrid
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
            </Box>
        </StyleContent>
    );
}