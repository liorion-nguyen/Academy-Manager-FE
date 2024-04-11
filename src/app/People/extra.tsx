"use client"
import { useEffect, useState } from "react";
import { StyleBoxBtn, StyleBoxContact, StyleBoxContent, StyleBtnDelete, StyleBtnEdit, StyleDetailStudent, StyleMainContent, StyleTitleContent, StyleTitleDetailStu } from "./style-mui";
import { GridColDef } from '@mui/x-data-grid';
import { Request } from "@/api/request";
import { useSelector } from "react-redux";
import { CircularProgress, LinearProgress } from "@mui/material";

type detailStuType = { title: string; content: any; }
export default function PeopleExtra(props: { people: string }) {
    var title = props.people;
    const [detailStu, SetDetailStu] = useState<detailStuType[]>([]);

    const peopleData = useSelector((state: any) => state.people.data);
    useEffect(() => {
        const fetchData = async () => {
            const data = await Request.get(`/users/${peopleData.id}`);
            SetDetailStu([
                {
                    title: "ref id",
                    content: data.id
                },
                {
                    title: "first name",
                    content: data.fullName.split(' ')[0]
                },
                {
                    title: "last name",
                    content: data.fullName.split(' ').slice(1).join(' ')
                },
                {
                    title: "gender",
                    content: data.gender
                },
                {
                    title: "email",
                    content: data.email
                },
                {
                    title: "address",
                    content: data.address || "Null"
                },
                {
                    title: "department",
                    content: peopleData.department
                },
                {
                    title: "class",
                    content: peopleData.class
                },
                {
                    title: "date Created",
                    content: data.createdAt
                },
                {
                    title: title === "Student" ? "student status" : "teacher status",
                    content: data.isActive ? "ACTIVE" : "INACTIVE"
                },
            ]);
        }
        if (peopleData) {
            fetchData();
        }
    }, [peopleData]);


    return (
        <StyleDetailStudent>
            <StyleTitleDetailStu>{title === "Student" ? "Student Details" : "Teacher Details"}</StyleTitleDetailStu>
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
                <StyleBoxBtn>
                    <StyleBtnEdit variant="outlined">EDIT</StyleBtnEdit>
                    <StyleBtnDelete variant="outlined">DELETE</StyleBtnDelete>
                </StyleBoxBtn>
            </> : <LinearProgress color="inherit" />
            }


        </StyleDetailStudent>
    );
}