"use client";
import { Box } from "@mui/system";
import { StyleMain } from "../Login/style-mui";
import {
  StyleBoxUser,
  StyleGridLeft,
  StyleGridUserNotification,
  StyleBoxNotification,
  StyleImgLeft,
  StyleBoxAvatarUser,
  StyleNameUser,
  StyleBoxInBoxUser,
  StyleIconDown,
  StyleBoxUserDisplay,
  StyleComponent,
  StyleGridRight,
  StyleInpSearch,
  StyleContent,
} from "../style-mui";
import { Fragment, useEffect, useRef, useState } from "react";
import { Button, Grid } from "@mui/material";
import NavLeft from "@/components/navleft";
import Header from "@/components/header";
import {
  StyleBoxBtn,
  StyleBoxSearch,
  StyleBoxSearch2,
  StyleButton,
  StyleInputSelect,
  StyleInputText,
  StyleTextP,
} from "./style-mui";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import RefreshIcon from "@mui/icons-material/Refresh";
import ClearIcon from "@mui/icons-material/Clear";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Drawer from "@mui/material/Drawer";
import DrawerClass from "@/components/drawerClass/page";
import { StyleBoxContact,
  StyleBoxContent,
  StyleBtnDelete,
  StyleBtnEdit,
  StyleCountStu,
  StyleDetailStudent,
  StyleMainContent,
  StyleTitleContent,
  StyleTitleDetailStu } from "../People/style-mui";

type detailStuType = { title: string; content: any };
type Anchor = "top" | "left" | "bottom" | "right";
export default function Class() {
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
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setStateDrawer({ ...stateDrawer, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: "50vw" }}
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
    setStudents([
      {
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
        updateAt: "19/02/2024",
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
        updateAt: "19/02/2024",
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
        updateAt: "19/02/2024",
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
        updateAt: "19/02/2024",
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
        updateAt: "19/02/2024",
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
        updateAt: "19/02/2024",
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
        updateAt: "19/02/2024",
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
        updateAt: "19/02/2024",
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
        updateAt: "19/02/2024",
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
        updateAt: "19/02/2024",
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
        updateAt: "19/02/2024",
      },
    ]);
  }, []);

  useEffect(() => {
    SetDetailStu([
      {
        title: "ref id",
        content: students[0]?.id,
      },
      {
        title: "name",
        content: students[0]?.name,
      },
      {
        title: "course",
        content: students[0]?.course,
      },
      {
        title: "operate",
        content: students[0]?.operate,
      },
      {
        title: "state",
        content: students[0]?.state,
      },
      {
        title: "start",
        content: students[0]?.start,
      },
      {
        title: "countTime",
        content: students[0]?.countTime,
      },
      {
        title: "mostLesson",
        content: students[0]?.mostLesson,
      },
      {
        title: "countStudent",
        content: students[0]?.countStudent,
      },
      {
        title: "countTeacher",
        content: students[0]?.countTeacher,
      },
      {
        title: "lecturer",
        content: students[0]?.lecturer,
      },
      {
        title: "createAt",
        content: students[0]?.createAt,
      },
      {
        title: "updateAt",
        content: students[0]?.updateAt,
      },
    ]);
    SetRows(students);
  }, [students]);

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Tên",
    },
    {
      field: "course",
      headerName: "Khoá học",
    },
    {
      field: "operate",
      headerName: "Phương thức vận hành",
    },
    {
      field: "state",
      headerName: "Trạng thái",
    },
    {
      field: "start",
      headerName: "Bắt đầu",
    },
    {
      field: "countTime",
      headerName: "Giờ",
    },
    {
      field: "mostLesson",
      headerName: "LSC",
    },
    {
      field: "countStudent",
      headerName: "SC",
    },
    {
      field: "countTeacher",
      headerName: "TC",
    },
    {
      field: "lecturer",
      headerName: "UC",
    },
    {
      field: "createAt",
      headerName: "CA",
    },
    {
      field: "updateAt",
      headerName: "LUA",
    },
  ];

  useEffect(() => {
    if (elementRef.current) {
      setElementWidth(elementRef.current.clientWidth);
    }
  }, []);

  const [basis, setBasis] = useState([
    {
      id: 1,
      name: "Nghi Xuân",
    },
    {
      id: 2,
      name: "Kỳ Anh",
    },
    {
      id: 3,
      name: "TP Hà Tĩnh",
    },
  ]);

  const [operate, setOperate] = useState([
    {
      id: 1,
      name: "Online",
    },
    {
      id: 2,
      name: "Offline",
    },
    {
      id: 3,
      name: "Hybird",
    },
  ]);

  const [course, setCourse] = useState([
    {
      id: "A",
      name: "Khoa học tự nhiên (A)",
    },
    {
      id: "C",
      name: "Khoa học xã hội (C)",
    },
    {
      id: "D",
      name: "Khoa học xã hội (D)",
    },
  ]);

  const [state, setState] = useState([
    {
      name: "New",
    },
    {
      name: "Running",
    },
    {
      name: "Finished",
    },
    {
      name: "Pending",
    },
    {
      name: "Preparing",
    },
  ]);

  const [teacher, setTeacher] = useState([
    {
      id: "1",
      name: "Nguyễn Quốc Chung",
    },
    {
      id: "2",
      name: "Liorion Nguyễn",
    },
    {
      id: "3",
      name: "Tuấn Nguyễn",
    },
    {
      id: "4",
      name: "Liên Tuấn Anh",
    },
    {
      id: "5",
      name: "Hoàng Minh Nhi",
    },
  ]);

  const handleShowStudent = (id: string) => {
    let findStu = students.filter((student: any) => student.id === id);
    findStu = findStu[0];

    SetDetailStu([
      {
        title: "ref id",
        content: findStu?.id,
      },
      {
        title: "name",
        content: findStu?.name,
      },
      {
        title: "course",
        content: findStu?.course,
      },
      {
        title: "operate",
        content: findStu?.operate,
      },
      {
        title: "state",
        content: findStu?.state,
      },
      {
        title: "start",
        content: findStu?.start,
      },
      {
        title: "countTime",
        content: findStu?.countTime,
      },
      {
        title: "mostLesson",
        content: findStu?.mostLesson,
      },
      {
        title: "countStudent",
        content: findStu?.countStudent,
      },
      {
        title: "countTeacher",
        content: findStu?.countTeacher,
      },
      {
        title: "lecturer",
        content: findStu?.lecturer,
      },
      {
        title: "createAt",
        content: findStu?.createAt,
      },
      {
        title: "updateAt",
        content: findStu?.updateAt,
      },
    ]);
  };

  const handleChange = (e: any) => {
    // Handle change logic here if needed
  };
  return (
    <StyleComponent>
      <StyleMain>
        <StyleGridUserNotification container spacing={2}>
          <StyleGridRight
            item
            xs={9}
            ref={elementRef}
            sx={{
              ".search": {
                display: "none",
              },
            }}
          >
            <Header value={elementWidth} />

            <StyleContent>
              <h3>Class</h3>
              <Grid container spacing={2}>
                <StyleBoxSearch item xs={2} md={2}>
                  <StyleTextP>Tìm kiếm</StyleTextP>
                  <StyleInputText placeholder="Tìm kiếm lớp" />
                </StyleBoxSearch>
                <StyleBoxSearch item xs={2} md={2}>
                  <StyleTextP>Cơ sở</StyleTextP>
                  <StyleInputSelect onChange={handleChange}>
                    {basis.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </StyleInputSelect>
                </StyleBoxSearch>
                <StyleBoxSearch item xs={2} md={2}>
                  <StyleTextP>Phương thức vận hành</StyleTextP>
                  <StyleInputSelect onChange={handleChange}>
                    {operate.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </StyleInputSelect>
                </StyleBoxSearch>
                <StyleBoxSearch item xs={2} md={2}>
                  <StyleTextP>Courses</StyleTextP>
                  <StyleInputSelect onChange={handleChange}>
                    {course.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </StyleInputSelect>
                </StyleBoxSearch>
                <StyleBoxSearch item xs={2} md={2}>
                  <StyleTextP>Ngày bắt đầu</StyleTextP>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoItem>
                      <MobileDatePicker
                        defaultValue={dayjs("2022-04-17")}
                        sx={{
                          ".MuiInputBase-input": {
                            padding: "8px",
                            color: "grey",
                          },
                        }}
                      />
                    </DemoItem>
                  </LocalizationProvider>
                </StyleBoxSearch>
                <StyleBoxSearch item xs={2} md={2}>
                  <StyleTextP>Ngày kết thúc</StyleTextP>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoItem>
                      <MobileDatePicker
                        defaultValue={dayjs("2022-04-17")}
                        sx={{
                          ".MuiInputBase-input": {
                            padding: "8px",
                            color: "grey",
                          },
                        }}
                      />
                    </DemoItem>
                  </LocalizationProvider>
                </StyleBoxSearch>
                <StyleBoxSearch item xs={2} md={2}>
                  <StyleTextP>Trạng thái</StyleTextP>
                  <StyleInputSelect onChange={handleChange}>
                    {state.map((item) => (
                      <option key={item.name} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                  </StyleInputSelect>
                </StyleBoxSearch>
                <StyleBoxSearch item xs={2} md={2}>
                  <StyleTextP>Giảng viên</StyleTextP>
                  <StyleInputSelect onChange={handleChange}>
                    {teacher.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </StyleInputSelect>
                </StyleBoxSearch>
                <StyleBoxSearch2 item xs={2} md={2}>
                  <StyleButton variant="contained">
                    <RefreshIcon /> Làm mới
                  </StyleButton>
                </StyleBoxSearch2>
                <StyleBoxSearch2 item xs={2} md={2}>
                  <StyleButton variant="contained">
                    <ClearIcon /> Xoá
                  </StyleButton>
                </StyleBoxSearch2>
              </Grid>
              <Box
                sx={{
                  height: "auto",
                  maxHeight: "85%",
                  width: "100%",
                  ".MuiDataGrid-columnHeaderTitle": {
                    color: "rgb(35,50,85,0.8)",
                    fontSize: "15px",
                  },
                  ".MuiDataGrid-cellContent": {
                    color: "rgb(35,50,85,0.7)",
                    fontSize: "14px",
                  },
                  ".MuiDataGrid-columnHeaders": {
                    background: "#F8F8F8",
                    border: "0.5px solid rgb(35,50,85,0.1) !important",
                  },
                  ".MuiDataGrid-row": {
                    background: "white",
                    border: "0.5px solid rgb(35,50,85,0.1) !important",
                    width: "100% !important",
                  },
                  ".MuiDataGrid-virtualScrollerRenderZone": {
                    width: "100% !important",
                  },
                  ".MuiSvgIcon-root": {
                    width: "15px",
                    height: "15px",
                  },
                  ".MuiCheckbox-root": {
                    color: "rgb(35,50,85,0.1)",
                  },
                  ".MuiDataGrid-cell[data-colindex='1']": {
                    minWidth: "16% !important",
                    maxWidth: "16% !important",
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
                    maxWidth: "16% !important",
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
                    width: "100%",
                  },
                  ".css-yrdy0g-MuiDataGrid-columnHeaderRow": {
                    width: "100%",
                  },
                  ".MuiTablePagination-displayedRows": {
                    display: "none",
                  },
                  ".MuiDataGrid-virtualScrollerContent": {
                    minHeight: "30vh !important",
                  },
                }}
              >
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
                <StyleCountStu>Showing 1 - 10 of {rows.length} </StyleCountStu>
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
              <StyleTitleDetailStu>Class Details</StyleTitleDetailStu>
              <StyleBoxContact>
                {detailStu.map((student, index) => (
                  <StyleBoxContent key={index}>
                    <StyleTitleContent>{student.title}</StyleTitleContent>
                    <StyleMainContent
                      color={
                        student.title === "email" || student.title === "address"
                          ? "#7FBDE4"
                          : student.title === "student status"
                          ? student.content === "ACTIVE"
                            ? "#84DE88"
                            : "#F62B2B"
                          : "rgb(35,50,85,0.8)"
                      }
                    >
                      {student.content}
                    </StyleMainContent>
                  </StyleBoxContent>
                ))}
              </StyleBoxContact>
              <StyleBoxBtn>
                <Fragment key="right">
                  <StyleBtnEdit
                    onClick={toggleDrawer("right", true)}
                    variant="outlined"
                  >
                    SHOW
                  </StyleBtnEdit>
                  <Drawer
                    anchor="right"
                    open={stateDrawer["right"]}
                    onClose={toggleDrawer("right", false)}
                  >
                    {list("right")}
                  </Drawer>
                </Fragment>
              </StyleBoxBtn>
            </StyleDetailStudent>
          </StyleGridLeft>
        </StyleGridUserNotification>
      </StyleMain>
    </StyleComponent>
  );
}
