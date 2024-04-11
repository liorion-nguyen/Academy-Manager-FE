"use client"
import { Box } from "@mui/system";
import { StyleBoxUser, StyleGridLeft, StyleGridUserNotification, StyleBoxNotification, StyleImgLeft, StyleBoxAvatarUser, StyleNameUser, StyleBoxInBoxUser, StyleIconDown, StyleBoxUserDisplay, StyleComponent, StyleGridRight, StyleInpSearch } from "../style-mui";
import { useEffect, useRef, useState } from "react";
import { StyleBoxBtn, StyleBoxBtnHandle, StyleBoxContact, StyleBoxContent, StyleBoxTable2, StyleBtnDelete, StyleBtnEdit, StyleButton, StyleButtonCreate, StyleContent, StyleCountStu, StyleDetailStudent, StyleFilter, StyleMainContent, StyleSearch, StyleTitleContent, StyleTitleDetailStu } from "./style-mui";
import { FormControl, Grid, LinearProgress, MenuItem, Select } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Request } from "@/api/request";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { PeopleActions } from "@/redux/people";

type detailStuType = { title: string; content: any; }
interface PersonData {
    id: string;
    fullName: string;
    gender: string;
    class: string;
    department: string;
}
export default function PeopleMain(props: { people: string }) {
    var title = props.people;
    const [detailStu, SetDetailStu] = useState<detailStuType[]>([]);
    const elementRef = useRef<HTMLDivElement | null>(null);
    const [elementWidth, setElementWidth] = useState<number | 1000>(1000);
    const [rows, setRows] = useState<PersonData[]>([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataFake = await Request.get(`/class/people/${title === "Student" ? 'student' : 'teacher'}`);            
                setLoading(false);
                if (dataFake && dataFake.length > 0) {
                    let newData: PersonData[] = [];
                    dataFake.forEach((item: any) => {
                        if (title === "Student") {
                            const studentsData: PersonData[] = item.students.map((student: any) => ({
                                id: student.id,
                                fullName: student.fullName,
                                gender: student.gender,
                                class: item.name,
                                department: item.course
                            }));
                            newData = newData.concat(studentsData);
                        } else {
                            newData.push({
                                id: item.teachers.id,
                                fullName: item.teachers.fullName,
                                gender: item.teachers.gender,
                                class: item.name,
                                department: item.course
                            });
                        }
                    });
                    setRows(newData);
                    if (newData && newData.length > 0) {
                        dispatch(PeopleActions.setPeople(newData[0]));
                    }
                } else {
                    setRows([]);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }            
        };
        fetchData();
    }, [title]);

    const handleShowStudent = (id: string) => {
        if (rows && rows.length > 0) {
            const findStu = rows.filter((student: any) => student.id === id);
            if (findStu.length > 0) {
                const student = findStu[0];
                dispatch(PeopleActions.setPeople(student));
            } else {
                console.log("Không tìm thấy sinh viên với id:", id);
            }
        } else {
            console.log("Không có dữ liệu sinh viên để tìm kiếm");
        }
    }

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
            field: 'fullName',
            headerName: 'Full Name',
        },
        {
            field: 'gender',
            headerName: 'Gender',
        },
        {
            field: 'class',
            headerName: 'Class',
        },
        {
            field: 'department',
            headerName: 'Department',
            sortable: false,
        },
    ];
    return (
        <StyleContent>
            <StyleBoxBtnHandle>
                <StyleButton variant="contained">PRINT</StyleButton>
                <StyleButton variant="contained">EXPORT</StyleButton>
                <StyleButtonCreate variant="contained">{title === "Student" ? "CREATE STUDENT" : "CREATE TEACHER"}</StyleButtonCreate>
            </StyleBoxBtnHandle>
            <StyleFilter container spacing={2}>
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
            <StyleBoxTable2>
                {
                    !loading ?  <>
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
                        </> : <LinearProgress />
                        
                }
            </StyleBoxTable2>
        </StyleContent>
    );
}