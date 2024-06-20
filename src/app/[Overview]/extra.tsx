import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { StyleBoxButton, StyleBoxNote, StyleCalendar, StyleCalendarEvent, StyleContentNote, StyleEvent, StyleH3TitleEvent, StyleNote, StyleTimeNote, StyleTitleNote } from "../style-mui";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { Button } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useState } from "react";

export default function OverviewExtra() {
    const [timer, setTimer] = useState<Date>(new Date());
    const [timeNote, setTimeNote] = useState("all");
    const handleChangeTimeNote = (value: string) => {
        setTimeNote(value);
    }
    const Notes = [{
        title: "Saturday",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam.",
        date: "9TH April 2022",
        color: "246,173,43"
    },
    {
        title: "Saturday",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam.",
        date: "9TH April 2022",
        color: "77,193,82"
    },
    {
        title: "Saturday",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam.",
        date: "9TH April 2022",
        color: "246,43,43"
    },
    {
        title: "Saturday",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam.",
        date: "9TH April 2022",
        color: "35,50,85"
    }]
    return (
        <StyleCalendarEvent>
            <StyleCalendar>
                <LocalizationProvider
                    dateAdapter={AdapterDayjs}>
                    <DemoContainer
                        sx={{
                            ".MuiPickersToolbar-root": {
                                display: 'none'
                            },
                            ".MuiDialogActions-root": {
                                display: 'none'
                            },
                            ".MuiPickersCalendarHeader-label": {
                                color: '#7FBDE4',
                                fontSize: '16px'
                            },
                            ".MuiPickersCalendarHeader-switchViewButton": {
                                display: 'none'
                            },
                            ".MuiSvgIcon-fontSizeInherit": {
                                color: "#7FBDE4"
                            },
                            ".css-1u23akw-MuiButtonBase-root-MuiPickersDay-root.Mui-selected": {
                                borderRadius: '5px',
                                background: '#7FBDE4',
                                color: '#FFFFFF'
                            },
                            ".MuiPickersLayout-root": {
                                borderRadius: '10px'
                            }
                        }}
                        components={[
                            'DatePicker',
                            'MobileDatePicker',
                            'DesktopDatePicker',
                            'StaticDatePicker',
                        ]}
                    >
                        <StaticDatePicker defaultValue={dayjs(`${timer.getFullYear()}-${timer.getMonth()}-${timer.getDate()}`)} />
                    </DemoContainer>
                </LocalizationProvider>
            </StyleCalendar>
            <StyleEvent>
                <StyleH3TitleEvent>Upcoming events</StyleH3TitleEvent>
                <StyleBoxButton sx={{
                    ".MuiButton-outlinedPrimary": {
                        border: "1px solid rgb(127,189,228,0.8)",
                        borderRadius: "21px",
                        fontSize: '10px',
                        minWidth: '50px',
                    }
                }}>
                    <Button sx={{ background: timeNote === "all" ? "rgb(35,50,85,0.8)" : "transparent", color: timeNote === "all" ? "#FFD791" : "rgb(2,189,228,0.8)", }} variant="outlined" onClick={() => handleChangeTimeNote("all")}>All</Button>
                    <Button sx={{ background: timeNote === "today" ? "rgb(35,50,85,0.8)" : "transparent", color: timeNote === "today" ? "#FFD791" : "rgb(2,189,228,0.8)", }} variant="outlined" onClick={() => handleChangeTimeNote("today")}>Today</Button>
                    <Button sx={{ background: timeNote === "weekly" ? "rgb(35,50,85,0.8)" : "transparent", color: timeNote === "weekly" ? "#FFD791" : "rgb(2,189,228,0.8)", }} variant="outlined" onClick={() => handleChangeTimeNote("weekly")}>Weekly</Button>
                    <Button sx={{ background: timeNote === "monthly" ? "rgb(35,50,85,0.8)" : "transparent", color: timeNote === "monthly" ? "#FFD791" : "rgb(2,189,228,0.8)", }} variant="outlined" onClick={() => handleChangeTimeNote("monthly")}>Monthly</Button>
                </StyleBoxButton>
                <StyleNote>
                    {
                        Notes.map((note: any, index: number) => (
                            <StyleBoxNote color={(note.color)} key={index}>
                                <StyleTitleNote>{note.title}</StyleTitleNote>
                                <StyleContentNote>{note.content}</StyleContentNote>
                                <StyleTimeNote>{note.date}</StyleTimeNote>
                            </StyleBoxNote>
                        ))
                    }
                </StyleNote>
            </StyleEvent>
        </StyleCalendarEvent>
    );
}