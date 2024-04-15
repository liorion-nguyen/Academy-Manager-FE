import { Box } from "@mui/system";
import { StyleContent } from "../People/style-mui";
import { Autocomplete } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { StyleBoxInput, StyleBoxRowInput, StyleBoxRowInputFirst, StyleButtonChoose, StyleButtonInput, StyleDataGrid, StyleInput, StyleLabelInput, StyleTitleH3 } from "./style-mui";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { PeopleActions } from "@/redux/people";
import { Request } from "@/api/request";

type ClassData = {
    id: string;
    fullName: string;
    email: string;
    address: string;
    joined: string;
    permissions: string;
};

export default function UserMain() {
    const options = ['Option 1', 'Option 2'];
    const [rows, setRows] = useState<ClassData[]>([]);
    const dispatch = useDispatch();
    const handleShowStudent = (id: string) => {
        let findStu: ClassData | undefined = undefined;
        if (rows) {
            const foundStudents = rows.filter((student: ClassData) => student.id === id);
            if (foundStudents.length > 0) {
                findStu = foundStudents[0];
                dispatch(PeopleActions.setPeople(findStu));
            }
        }
    };
    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
        },
        {
            field: 'fullName',
            headerName: 'Full Name',
        },
        {
            field: 'email',
            headerName: 'Email Address',
        },
        {
            field: 'address',
            headerName: 'Location',
        },
        {
            field: 'joined',
            headerName: 'Joined',
        },
        {
            field: 'permissions',
            headerName: 'Permissions',
        }
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataFake = await Request.get(`/users`);

                const tempRows = dataFake.map((item: any) => ({
                    id: item.id,
                    fullName: item.fullName,
                    email: item.email,
                    address: item.address || "No Data",
                    joined: item.createdAt,
                    permissions: item.role
                }));

                setRows(tempRows);
                if (dataFake && dataFake.length > 0) {
                    dispatch(PeopleActions.setPeople(dataFake[0]));
                }
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        const overlayElements = document.getElementsByClassName('MuiDataGrid-overlayWrapperInner');

        if (overlayElements.length > 0) {
            overlayElements[0].innerHTML = "<div class='boxLoader'><div class='loader'></div></div>";
        }
    })


    return (
        <StyleContent>
            <StyleTitleH3>User managerment</StyleTitleH3>
            <StyleBoxRowInput>
                <StyleBoxRowInputFirst>
                    <StyleInput placeholder="Search items..." value="" />
                    <StyleBoxInput>
                        <p>Permissions</p>
                        <StyleLabelInput>
                            <Autocomplete
                                sx={{
                                    display: 'inline-block',
                                    '& input': {
                                        width: 200,
                                        bgcolor: 'background.paper',
                                        color: (theme) =>
                                            theme.palette.getContrastText(theme.palette.background.paper),
                                    },
                                }}
                                id="custom-input-demo"
                                options={options}
                                renderInput={(params) => (
                                    <div ref={params.InputProps.ref}>
                                        <input type="text" {...params.inputProps} />
                                    </div>
                                )}
                            />
                            <ExpandMoreIcon />
                        </StyleLabelInput>
                    </StyleBoxInput>
                    <StyleBoxInput>
                        <p>Joined</p>
                        <StyleLabelInput>
                            <Autocomplete
                                sx={{
                                    display: 'inline-block',
                                    '& input': {
                                        width: 200,
                                        bgcolor: 'background.paper',
                                        color: (theme) =>
                                            theme.palette.getContrastText(theme.palette.background.paper),
                                    },
                                }}
                                id="custom-input-demo"
                                options={options}
                                renderInput={(params) => (
                                    <div ref={params.InputProps.ref}>
                                        <input type="text" {...params.inputProps} />
                                    </div>
                                )}
                            />
                            <ExpandMoreIcon />
                        </StyleLabelInput>
                    </StyleBoxInput>
                </StyleBoxRowInputFirst>
                <StyleBoxRowInputFirst>
                    <StyleButtonInput>
                        <MoreVertIcon />
                    </StyleButtonInput>
                    <StyleButtonInput>Export</StyleButtonInput>
                    <StyleButtonChoose>+ New User</StyleButtonChoose>
                </StyleBoxRowInputFirst>

            </StyleBoxRowInput>
            <StyleDataGrid
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
        </StyleContent>
    );
}