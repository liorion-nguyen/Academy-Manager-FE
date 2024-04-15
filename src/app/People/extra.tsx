"use client"
import { useEffect, useState } from "react";
import { StyleBoxBtn, StyleBoxContact, StyleBoxContent, StyleBtnDelete, StyleBtnEdit, StyleColumnGap30, StyleDetailStudent, StyleMainContent, StyleTitleContent, StyleTitleDetailStu } from "./style-mui";
import { useDispatch, useSelector } from "react-redux";
import { LinearProgress } from "@mui/material";
import { ModalActions } from "@/redux/modal";
import ModalPeople from "./modal.people";

type detailStuType = { title: string; content: any; }
export default function PeopleExtra(props: { people: string }) {
    var title = props.people;
    const dispatch = useDispatch();
    const [detailStu, SetDetailStu] = useState<detailStuType[]>([]);

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
                    title: "address",
                    content: peopleData.address || "Null"
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
                    content: peopleData.createdAt
                },
                {
                    title: title === "Student" ? "student status" : "teacher status",
                    content: peopleData.isActive ? "ACTIVE" : "INACTIVE"
                },
            ]);
        }
    }, [peopleData]);

    const handleOpen = () => dispatch(ModalActions.setModal(true));
    return (
        <StyleDetailStudent>
            <StyleColumnGap30>
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

                    </> : <LinearProgress color="inherit" />
                }
            </StyleColumnGap30>
            <StyleBoxBtn>
                <StyleBtnEdit onClick={handleOpen} variant="outlined" disabled={peopleData ? false : true}>EDIT</StyleBtnEdit>
                <StyleBtnDelete variant="outlined" disabled={peopleData ? false : true}>DELETE</StyleBtnDelete>
            </StyleBoxBtn>
            <ModalPeople people={title} />
        </StyleDetailStudent>
    );
}