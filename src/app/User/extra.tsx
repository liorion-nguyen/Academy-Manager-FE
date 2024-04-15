"use client"
import { useEffect, useState } from "react";
import { StyleBoxBtn, StyleBoxContact, StyleBoxContent, StyleBtnDelete, StyleBtnEdit, StyleColumnGap30, StyleDetailStudent, StyleMainContent, StyleTitleContent, StyleTitleDetailStu } from "../People/style-mui";
import { GridColDef } from '@mui/x-data-grid';
import { Request } from "@/api/request";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress, LinearProgress } from "@mui/material";
import { StyleRowGap20 } from "../style-mui";
import { ModalActions } from "@/redux/modal";
import ModalUser from "./modal.user";

type detailStuType = { title: string; content: any; }
export default function UserExtra() {
    const [detailStu, SetDetailStu] = useState<detailStuType[]>([]);
    const dispatch = useDispatch();
    const peopleData = useSelector((state: any) => state.people.data);
    useEffect(() => {
        if (peopleData) {
            SetDetailStu([
                {
                    title: "ref id",
                    content: peopleData.id
                },
                {
                    title: "first name",
                    content: peopleData.fullName.split(' ')[0]
                },
                {
                    title: "last name",
                    content: peopleData.fullName.split(' ').slice(1).join(' ')
                },
                {
                    title: "gender",
                    content: peopleData.gender
                },
                {
                    title: "email",
                    content: peopleData.email
                },
                {
                    title: "phone number",
                    content: peopleData.phone
                },
                {
                    title: "address",
                    content: peopleData.address || "No Data"
                },
                {
                    title: "department",
                    content: peopleData.department || "No Data"
                },
                {
                    title: peopleData.role === "student" ? "student class" : (peopleData.role === "teacher" ? "teach class" : "manager"),
                    content: peopleData.class || "No Data"
                },
                {
                    title: "date Created",
                    content: peopleData.createdAt
                },
                {
                    title: "permissions",
                    content: peopleData.role
                },
                {
                    title: "User status",
                    content: peopleData.isActive ? "ACTIVE" : "INACTIVE"
                },
            ]);
        }
        console.log(peopleData);
        
    }, [peopleData]);

    const handleOpen = () => dispatch(ModalActions.setModal(true));

    return (
        <StyleDetailStudent>
            <StyleColumnGap30>
            <StyleTitleDetailStu>User Details</StyleTitleDetailStu>
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
            }</StyleColumnGap30>
            <StyleBoxBtn>
                <StyleBtnEdit onClick={handleOpen} variant="outlined" disabled={peopleData ? false : true}>EDIT</StyleBtnEdit>
                <StyleBtnDelete variant="outlined" disabled={peopleData ? false : true}>DELETE</StyleBtnDelete>
            </StyleBoxBtn>
            <ModalUser />
        </StyleDetailStudent>
    );
}