import { ModalActions } from "@/redux/modal";
import { Button, FormControl, MenuItem, Modal, Select } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleBoxBtn, StyleBoxInp, StyleDesInp, StyleGroupInp, StyleInp, StyleModalBox, StyleTitleInfo, StyleTitleInp } from "../User/style-mui";
import { StyleBtnEdit, StyleBtnSave } from "../People/style-mui";
import { StyleColumnGap10 } from "../style-mui";
import { Request } from "@/api/request";

export default function ModalPeople(props: { people: string }) {
    var title = props.people === "Teacher" ? true : false;
    const dispatch = useDispatch();
    const mode = useSelector((state: any) => state.modal.data);
    const data = useSelector((state: any) => state.people.data);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [createdAt, setCreatedAt] = useState("");
    const [updatedAt, setUpdatedAt] = useState("");
    const [isActive, setIsActive] = useState("");
    const [address, setAddress] = useState("");
    const [department, setDepartment] = useState("");
    const [myClass, setMyClass] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            if (data && data.id) { 
                try {
                    const dataFake = await Request.get(`/users/${data.id}`);
                    setAddress(dataFake.address || "");
                    setIsActive(dataFake.isActive); 
                    setCreatedAt(dataFake.createdAt);
                    setUpdatedAt(dataFake.updatedAt);
                    setEmail(dataFake.email);
                    setPhone(dataFake.phone);
                } catch (error) {
                    console.error("Error fetching user data:", error);
                }
            }
        };
    
        if (data) {
            fetchData();
            setFirstName(data.fullName.split(' ')[0]);
            setLastName(data.fullName.split(' ').slice(1).join(' '));
            setGender(data.gender);
            setDepartment(data.department);
            setMyClass(data.class);
        }
    }, [data]);     

    useEffect(() => {
        setOpen(mode);
    }, [mode]);

    const [open, setOpen] = useState(mode);

    const handleClose = () => {
        setOpen(false);
        dispatch(ModalActions.setModal(false));
    };

    // Handlers for input changes
    const handleFirstNameChange = (event: any) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event: any) => {
        setLastName(event.target.value);
    };

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
    };

    const handlePhoneChange = (event: any) => {
        setPhone(event.target.value);
    };

    const handleGenderChange = (event: any) => {
        setGender(event.target.value);
    };

    const handleAddressChange = (event: any) => {
        setEmail(event.target.value);
    };

    const handleDepartmentChange = (event: any) => {
        setDepartment(event.target.value);
    };

    const handleClassChange = (event: any) => {
        setMyClass(event.target.value);
    };
    

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <StyleModalBox>
                <StyleTitleInfo>Information {title ? "Teacher" : "Student"}</StyleTitleInfo>

                <StyleColumnGap10>
                    <StyleTitleInp>ID</StyleTitleInp>
                    <StyleGroupInp>
                        <StyleBoxInp>
                            <StyleInp placeholder="id123456789" readOnly value={data?.id} />
                            <StyleDesInp>Ref ID</StyleDesInp>
                        </StyleBoxInp>
                    </StyleGroupInp>
                </StyleColumnGap10>

                <StyleColumnGap10>
                    <StyleTitleInp>Name</StyleTitleInp>
                    <StyleGroupInp>
                        <StyleBoxInp>
                            <StyleInp placeholder="Van A" value={firstName} onChange={handleFirstNameChange} />
                            <StyleDesInp>First Name</StyleDesInp>
                        </StyleBoxInp>
                        <StyleBoxInp>
                            <StyleInp placeholder="Nguyen" value={lastName} onChange={handleLastNameChange} />
                            <StyleDesInp>Last Name</StyleDesInp>
                        </StyleBoxInp>
                    </StyleGroupInp>
                </StyleColumnGap10>

                <StyleColumnGap10>
                    <StyleTitleInp>Contact</StyleTitleInp>
                    <StyleGroupInp>
                        <StyleBoxInp>
                            <StyleInp placeholder="example@gmail.com" value={email} onChange={handleEmailChange} />
                            <StyleDesInp>Email</StyleDesInp>
                        </StyleBoxInp>
                        <StyleBoxInp>
                            <StyleInp placeholder="0123456789" value={phone} onChange={handlePhoneChange} />
                            <StyleDesInp>Phone</StyleDesInp>
                        </StyleBoxInp>
                    </StyleGroupInp>
                </StyleColumnGap10>

                <StyleColumnGap10>
                    <StyleTitleInp>Time</StyleTitleInp>
                    <StyleGroupInp>
                        <StyleBoxInp>
                            <StyleInp placeholder="Creation time" readOnly value={createdAt} />
                            <StyleDesInp>CreatedAt</StyleDesInp>
                        </StyleBoxInp>
                        <StyleBoxInp>
                            <StyleInp placeholder="Last updated time" readOnly value={updatedAt} />
                            <StyleDesInp>UpdatedAt</StyleDesInp>
                        </StyleBoxInp>
                    </StyleGroupInp>
                </StyleColumnGap10>

                <StyleColumnGap10>
                    <StyleTitleInp>Address</StyleTitleInp>
                    <StyleGroupInp>
                        <StyleBoxInp>
                            <StyleInp placeholder="Ho Chi Minh EX" value={address} onChange={handleAddressChange} />
                            <StyleDesInp>Address</StyleDesInp>
                        </StyleBoxInp>
                        <FormControl
                            sx={{
                                m: 1, minWidth: 120
                            }}>
                            <Select
                                value={gender}
                                onChange={handleGenderChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value={"male"}>Male</MenuItem>
                                <MenuItem value={"female"}>Female</MenuItem>
                                <MenuItem value={"other"}>Other</MenuItem>
                            </Select>
                        </FormControl>
                    </StyleGroupInp>
                </StyleColumnGap10>

                <StyleColumnGap10>
                    <StyleTitleInp>Contact Class</StyleTitleInp>
                    <StyleGroupInp>
                        <StyleBoxInp>
                            <StyleInp placeholder="My Class" value={myClass} onChange={handleClassChange} />
                            <StyleDesInp>Class</StyleDesInp>
                        </StyleBoxInp>
                        <StyleBoxInp>
                            <StyleInp placeholder="Department" value={department} onChange={handleDepartmentChange} />
                            <StyleDesInp>Department</StyleDesInp>
                        </StyleBoxInp>
                    </StyleGroupInp>
                </StyleColumnGap10>

                <Button variant="contained" color={isActive ? "success" : "error"}>
                    {
                        isActive ? "Active" : "InActive"
                    }
                </Button>

                <StyleBoxBtn>
                    <StyleBtnEdit variant="outlined" onClick={handleClose}>Back</StyleBtnEdit>
                    <StyleBtnSave variant="outlined">Save</StyleBtnSave>
                </StyleBoxBtn>
            </StyleModalBox>
        </Modal>
    );
}