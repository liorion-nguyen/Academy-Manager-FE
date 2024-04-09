"use client"
import { useEffect, useState } from "react";
import { StyleBoxBtn, StyleBoxContact, StyleBoxContent, StyleBtnDelete, StyleBtnEdit, StyleDetailStudent, StyleMainContent, StyleTitleContent, StyleTitleDetailStu } from "./style-mui";
import { GridColDef } from '@mui/x-data-grid';
import { Request } from "@/api/request";

type detailStuType = { title: string; content: any; }
export default function PeopleExtra(props: { people: string }) {
    var title = props.people;

    const [detailStu, SetDetailStu] = useState<detailStuType[]>([]);
    const [rows, SetRows] = useState<any[]>([]);

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
        };
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

    return (
        <StyleDetailStudent>
            <StyleTitleDetailStu>{title === "Student" ? "Student Details" : "Teacher Details"}</StyleTitleDetailStu>
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
                <StyleBtnEdit variant="outlined">EDIT</StyleBtnEdit>
                <StyleBtnDelete variant="outlined">DELETE</StyleBtnDelete>
            </StyleBoxBtn>

        </StyleDetailStudent>
    );
}