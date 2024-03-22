import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  StyleBoxContentTab1,
  StyleBoxMainTab1,
  StyleBoxTab,
  StyleBoxTeacher,
  StyleBoxTeacherRow,
  StyleBoxTime,
  StyleBoxTitle,
  StyleBoxType,
  StyleButtonReturn,
  StyleContentTab1,
  StyleCountP,
  StyleH6,
  StyleHr,
  StyleInputTab1,
  StyleMainTeacher,
  StylePMin,
  StyleStateTxt,
  StyleTilteP,
  StyleTitleTab,
} from "./style-mui";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import { StyleButton, StyleInputSelect } from "@/app/Class/style-mui";
import Row from "../RowTable/page";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";
import {
  LocalizationProvider,
  MobileDatePicker,
  MobileTimePicker,
} from "@mui/x-date-pickers";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function createData(
  name: string,
  learingMethod: string,
  email: string,
  phone: string,
  state: boolean,
  complete: boolean,
  note: string
) {
  return {
    name,
    learingMethod,
    email,
    phone,
    state,
    complete,
    note,
  };
}

function DataClassSite(
  name: string,
  basis: string,
  teacher: string,
  studentcount: number,
  ca: string,
  lua: string
) {
  return { name, basis, teacher, studentcount, ca, lua };
}

export default function DrawerClass({ data }: any) {
  console.log(data);
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleHideTab = () => {};

  const rows = [
    createData(
      "Trần Thị Thu Quý",
      "ONLINE",
      "kotenn619@gmail.com",
      "",
      true,
      false,
      ""
    ),
    createData(
      "Nguyễn Thị Nhung",
      "OFFLINE",
      "kotenn619@gmail.com",
      "",
      false,
      false,
      ""
    ),
    createData("Nguyễn Hoàng Sơn", "ONLINE", "", "", true, false, ""),
    createData(
      "Bạch Lê Khánh Vân",
      "OFFLINE",
      "kotenn619@gmail.com",
      "",
      true,
      false,
      ""
    ),
    createData("Liorion Nguyen", "ONLINE", "", "", true, false, ""),
  ];

  const [typeTeacher, setTypeTeacher] = useState([
    "LEC",
    "MT",
    "Judge",
    "ST 18+",
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

  const [teacherSchedules, setTeacherSchedules] = useState([
    {
      Lec: ["chungnq"],
      MT: [],
      Judge: [],
    },
    {
      Lec: ["chungnq"],
      MT: [],
      Judge: [],
    },
    {
      Lec: ["chungnq"],
      MT: ["chinhpt"],
      Judge: [],
    },
    {
      Lec: ["chungnq"],
      MT: ["chinhpt"],
      Judge: [],
    },
    {
      Lec: ["chungnq"],
      MT: ["chinhpt"],
      Judge: [],
    },
    {
      Lec: ["chungnq"],
      MT: ["chinhpt"],
      Judge: [],
    },
    {
      Lec: ["chungnq"],
      MT: ["chinhpt"],
      Judge: [],
    },
    {
      Lec: ["chungnq"],
      MT: ["chinhpt"],
      Judge: [],
    },
    {
      Lec: ["chungnq"],
      MT: ["chinhpt"],
      Judge: [],
    },
    {
      Lec: ["chungnq"],
      MT: ["chinhpt"],
      Judge: [],
    },
    {
      Lec: ["chungnq"],
      MT: ["chinhpt"],
      Judge: [],
    },
    {
      Lec: ["chungnq"],
      MT: ["chinhpt"],
      Judge: [],
    },
    {
      Lec: ["chungnq"],
      MT: ["chinhpt"],
      Judge: [],
    },
    {
      Lec: ["chungnq"],
      MT: ["chinhpt"],
      Judge: [],
    },
  ]);

  const classSites = [
    DataClassSite(
      data[1].content,
      "Nghi Xuân",
      data[10].content,
      data[8].content,
      data[11].content,
      data[12].content
    ),
  ];

  const [learnSchedules, setLearnSchedules] = useState([
    {
      date: "02/19/2024",
      timeStart: new Date("2018-01-01T00:00:00.000Z"),
      timeEnd: new Date("2018-01-01T00:00:00.000Z"),
    },
    {
      date: "02/26/2024",
      timeStart: new Date("2018-01-01T00:00:00.000Z"),
      timeEnd: new Date("2018-01-01T00:00:00.000Z"),
    },
    ,
    {
      date: "03/03/2024",
      timeStart: new Date("2018-01-01T00:00:00.000Z"),
      timeEnd: new Date("2018-01-01T00:00:00.000Z"),
    },
    {
      date: "03/10/2024",
      timeStart: new Date("2018-01-01T00:00:00.000Z"),
      timeEnd: new Date("2018-01-01T00:00:00.000Z"),
    },
    {
      date: "03/17/2024",
      timeStart: new Date("2018-01-01T00:00:00.000Z"),
      timeEnd: new Date("2018-01-01T00:00:00.000Z"),
    },
    {
      date: "03/24/2024",
      timeStart: new Date("2018-01-01T00:00:00.000Z"),
      timeEnd: new Date("2018-01-01T00:00:00.000Z"),
    },
    {
      date: "03/31/2024",
      timeStart: new Date("2018-01-01T00:00:00.000Z"),
      timeEnd: new Date("2018-01-01T00:00:00.000Z"),
    },
    ,
    {
      date: "04/07/2024",
      timeStart: new Date("2018-01-01T00:00:00.000Z"),
      timeEnd: new Date("2018-01-01T00:00:00.000Z"),
    },
    {
      date: "04/14/2024",
      timeStart: new Date("2018-01-01T00:00:00.000Z"),
      timeEnd: new Date("2018-01-01T00:00:00.000Z"),
    },
    {
      date: "04/21/2024",
      timeStart: new Date("2018-01-01T00:00:00.000Z"),
      timeEnd: new Date("2018-01-01T00:00:00.000Z"),
    },
    {
      date: "04/28/2024",
      timeStart: new Date("2018-01-01T00:00:00.000Z"),
      timeEnd: new Date("2018-01-01T00:00:00.000Z"),
    },
    {
      date: "05/05/2024",
      timeStart: new Date("2018-01-01T00:00:00.000Z"),
      timeEnd: new Date("2018-01-01T00:00:00.000Z"),
    },
  ]);
  const handleTimeChange = (selectedTime: any) => {
    console.log("Selected Time: ", selectedTime);
    // Thực hiện xử lý với giá trị đã chọn
  };

  return (
    <StyleBoxTab>
      <StyleBoxTitle>
        <StyleH6>{data[1].content}</StyleH6>
        <StyleStateTxt>{data[4].content}</StyleStateTxt>
      </StyleBoxTitle>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <StyleTitleTab label="Thông tin chung" value="1" />
            <StyleTitleTab label="Lịch học" value="2" />
            <StyleTitleTab label="Nhập học" value="3" />
            <StyleTitleTab label="Học viên" value="4" />
            <StyleTitleTab label="Giảng viên" value="5" />
            <StyleTitleTab label="Class sites" value="6" />
            <StyleTitleTab label="Điểm danh" value="7" />
            <StyleTitleTab label="Nhận xét" value="8" />
            <StyleTitleTab label="Tin nhắn" value="9" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <StyleBoxMainTab1>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <StyleBoxContentTab1>
                  <StyleContentTab1>Cơ sở</StyleContentTab1>
                  <StyleInputTab1 value="Nghi Xuân" placeholder="Cơ sở" />
                </StyleBoxContentTab1>
              </Grid>
              <Grid item xs={3}>
                <StyleBoxContentTab1>
                  <StyleContentTab1>Khoá học</StyleContentTab1>
                  <StyleInputTab1
                    value={data[2].content}
                    placeholder="Khoá học"
                  />
                </StyleBoxContentTab1>
              </Grid>
              <Grid item xs={3}>
                <StyleBoxContentTab1>
                  <StyleContentTab1>Phương thức vận hành</StyleContentTab1>
                  <StyleInputTab1
                    value={data[3].content}
                    placeholder="Phương thức vận hành"
                  />
                </StyleBoxContentTab1>
              </Grid>
              <Grid item xs={3}>
                <StyleBoxContentTab1>
                  <StyleContentTab1>Tên</StyleContentTab1>
                  <StyleInputTab1 value={data[1].content} placeholder="Tên" />
                </StyleBoxContentTab1>
              </Grid>
              <Grid item xs={3}>
                <StyleBoxContentTab1>
                  <StyleContentTab1>Phòng khai giảng</StyleContentTab1>
                  <StyleInputTab1
                    value={data[1].content}
                    placeholder="Phòng khai giảng"
                  />
                </StyleBoxContentTab1>
              </Grid>
            </Grid>
            <StyleButtonReturn>
              <StyleButton variant="contained" onClick={handleHideTab}>
                Quay lại
              </StyleButton>
            </StyleButtonReturn>
          </StyleBoxMainTab1>
        </TabPanel>
        <TabPanel value="2">
          <StyleBoxMainTab1>
            <StyleMainTeacher>
              <StyleTilteP>Cài đặt chung</StyleTilteP>
              <StyleHr />
              <Box>
                <StylePMin>No. sessions</StylePMin>
                <StyleBoxTeacher>
                  <StyleInputTab1 value={14} placeholder="Number session" />
                  <SettingsBackupRestoreIcon />
                </StyleBoxTeacher>
              </Box>
            </StyleMainTeacher>
            <StyleMainTeacher>
              <StyleTilteP>Cài đặt lịch</StyleTilteP>
              <StyleHr />
              <StyleBoxTeacher>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoItem>
                    <StyleBoxTime>
                      <MobileDatePicker defaultValue={dayjs("2022-04-17")} />
                      <MobileTimePicker label={""} openTo="minutes" />
                      <MobileTimePicker label={""} openTo="minutes" />
                    </StyleBoxTime>
                  </DemoItem>
                </LocalizationProvider>
              </StyleBoxTeacher>
              <AddIcon />
            </StyleMainTeacher>
            <StyleMainTeacher>
              <StyleTilteP>Buổi học</StyleTilteP>
              <StyleHr />
              <StyleMainTeacher>
                {learnSchedules.map((learnSchedule, index) => (
                  <StyleBoxTime key={index}>
                    <input type="checkbox" />
                    <p>#{index + 1}</p>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoItem>
                        <StyleBoxTime>
                          <MobileDatePicker
                            defaultValue={dayjs(learnSchedule?.date)}
                          />
                          <MobileTimePicker
                            openTo="minutes"
                            value={learnSchedule?.timeStart}
                          />
                          <MobileTimePicker
                            openTo="minutes"
                            value={learnSchedule?.timeEnd}
                          />
                        </StyleBoxTime>
                      </DemoItem>
                    </LocalizationProvider>
                  </StyleBoxTime>
                ))}
              </StyleMainTeacher>
            </StyleMainTeacher>
          </StyleBoxMainTab1>
        </TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">
          <StyleBoxMainTab1>
            <StyleBoxContentTab1>
              <StyleContentTab1>Trạng thái trong lớp</StyleContentTab1>
              <StyleInputSelect>
                <option value="all">Tất cả</option>
                <option value="on">Đã bật</option>
                <option value="off">Đã tắt</option>
              </StyleInputSelect>
            </StyleBoxContentTab1>
            <TableContainer component={Paper}>
              <Table aria-label="collapsible table">
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell>Name</TableCell>
                    <TableCell align="left">Learning method</TableCell>
                    <TableCell align="left">Email</TableCell>
                    <TableCell align="left">Phone</TableCell>
                    <TableCell align="left">State</TableCell>
                    <TableCell align="left">Complete</TableCell>
                    <TableCell align="left">Note</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <Row key={row.name} row={row} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <StyleButtonReturn>
              <StyleButton variant="contained" onClick={handleHideTab}>
                Quay lại
              </StyleButton>
            </StyleButtonReturn>
          </StyleBoxMainTab1>
        </TabPanel>
        <TabPanel value="5">
          <StyleBoxMainTab1>
            <StyleBoxContentTab1>
              <StyleContentTab1>Chọn nhóm</StyleContentTab1>
              <StyleInputSelect>
                <option value="all">Default</option>
              </StyleInputSelect>
            </StyleBoxContentTab1>

            <StyleMainTeacher>
              <StyleTilteP>Giảng viên lớp học</StyleTilteP>
              <StyleHr />
              <StyleBoxTeacher>
                <StyleInputSelect>
                  {teacher.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </StyleInputSelect>
                <StyleInputSelect>
                  {typeTeacher.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </StyleInputSelect>
              </StyleBoxTeacher>
              <AddIcon />
            </StyleMainTeacher>

            <StyleMainTeacher>
              <StyleTilteP>Giảng viên theo lịch</StyleTilteP>
              <StyleHr />
              {teacherSchedules.map((teacherSchedule: any, index: number) => (
                <StyleBoxTeacher key={index}>
                  <StyleCountP>#{index + 1}</StyleCountP>
                  <StyleBoxTeacherRow>
                    {teacherSchedule.Lec.map(
                      (teacherId: any, index: number) => (
                        <StyleBoxTeacher key={index}>
                          <StyleInputTab1
                            value={teacherId}
                            placeholder="Cơ sở"
                          />
                          <StyleBoxType value="LEC" placeholder="Cơ sở" />
                        </StyleBoxTeacher>
                      )
                    )}
                    {teacherSchedule.MT.map((teacherId: any, index: number) => (
                      <StyleBoxTeacher key={index}>
                        <StyleInputTab1 value={teacherId} placeholder="Cơ sở" />
                        <StyleBoxType value="LEC" placeholder="Cơ sở" />
                      </StyleBoxTeacher>
                    ))}
                  </StyleBoxTeacherRow>
                  <AddIcon />
                </StyleBoxTeacher>
              ))}
            </StyleMainTeacher>
          </StyleBoxMainTab1>
        </TabPanel>
        <TabPanel value="6">
          <StyleBoxMainTab1>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Tên</TableCell>
                    <TableCell align="left">Cơ sở</TableCell>
                    <TableCell align="left">Giảng viên</TableCell>
                    <TableCell align="left">Số học viên</TableCell>
                    <TableCell align="left">CA</TableCell>
                    <TableCell align="left">LUA</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {classSites.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <ExpandMoreIcon />
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="left">{row.basis}</TableCell>
                      <TableCell align="left">{row.teacher}</TableCell>
                      <TableCell align="left">{row.studentcount}</TableCell>
                      <TableCell align="left">{row.ca}</TableCell>
                      <TableCell align="left">{row.lua}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <StyleButtonReturn>
              <StyleButton variant="contained" onClick={handleHideTab}>
                Quay lại
              </StyleButton>
            </StyleButtonReturn>
          </StyleBoxMainTab1>
        </TabPanel>
        <TabPanel value="7">Item Three</TabPanel>
        <TabPanel value="8">Item Three</TabPanel>
        <TabPanel value="9">Item Three</TabPanel>
      </TabContext>
    </StyleBoxTab>
  );
}
