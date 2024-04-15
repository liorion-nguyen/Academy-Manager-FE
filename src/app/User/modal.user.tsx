import { ModalActions } from "@/redux/modal";
import { Button, FormControl, MenuItem, Modal, Select } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleBoxBtn, StyleBoxInp, StyleDesInp, StyleGroupInp, StyleInp, StyleModalBox, StyleTitleInfo, StyleTitleInp } from "./style-mui";
import { StyleBtnEdit, StyleBtnSave } from "../People/style-mui";
import { StyleColumnGap10 } from "../style-mui";

export default function ModalUser() {
    const dispatch = useDispatch();
    const mode = useSelector((state: any) => state.modal.data);
    const data = useSelector((state: any) => state.people.data);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [role, setRole] = useState("");
    const [isActive, setIsActive] = useState("");
    const [address, setAddress] = useState("");

    useEffect(() => {
        if (data) {
            setFirstName(data.fullName.split(' ')[0]);
            setLastName(data.fullName.split(' ').slice(1).join(' '));
            setEmail(data.email);
            setPhone(data.phone);
            setGender(data.gender);
            setRole(data.role);
            setIsActive(data.isActive);
            setAddress(data.address || "");
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

    const handleRoleChange = (event: any) => {
        setRole(event.target.value);
    };

    const handleAddressChange = (event: any) => {
        setEmail(event.target.value);
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <StyleModalBox>
                <StyleTitleInfo>Information User</StyleTitleInfo>

                <StyleColumnGap10>
                    <StyleTitleInp>ID</StyleTitleInp>
                    <StyleGroupInp>
                        <StyleBoxInp>
                            <StyleInp placeholder="abc123456789" readOnly value={data?.id} />
                            <StyleDesInp>Ref ID</StyleDesInp>
                        </StyleBoxInp>
                    </StyleGroupInp>
                </StyleColumnGap10>

                <StyleColumnGap10>
                    <StyleTitleInp>Name</StyleTitleInp>
                    <StyleGroupInp>
                        <StyleBoxInp>
                            <StyleInp placeholder="Liorion" value={firstName} onChange={handleFirstNameChange} />
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
                            <StyleInp placeholder="0708200334" value={phone} onChange={handlePhoneChange} />
                            <StyleDesInp>Phone</StyleDesInp>
                        </StyleBoxInp>
                    </StyleGroupInp>
                </StyleColumnGap10>

                <StyleColumnGap10>
                    <StyleTitleInp>Time</StyleTitleInp>
                    <StyleGroupInp>
                        <StyleBoxInp>
                            <StyleInp placeholder="2024-04-09T04:20:15.329Z" readOnly value={data?.createdAt} />
                            <StyleDesInp>CreatedAt</StyleDesInp>
                        </StyleBoxInp>
                        <StyleBoxInp>
                            <StyleInp placeholder="2024-04-09T04:20:15.329Z" readOnly value={data?.updatedAt} />
                            <StyleDesInp>UpdatedAt</StyleDesInp>
                        </StyleBoxInp>
                    </StyleGroupInp>
                </StyleColumnGap10>

                <StyleColumnGap10>
                    <StyleTitleInp>Address</StyleTitleInp>
                    <StyleGroupInp>
                        <StyleBoxInp>
                            <StyleInp placeholder="Nghi Xuan, Ha Tinh" value={address} onChange={handleAddressChange} />
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
                    <StyleTitleInp>Role</StyleTitleInp>
                    <StyleGroupInp>
                        <FormControl
                            sx={{
                                m: 1, minWidth: 120
                            }}>
                            <Select
                                value={role}
                                onChange={handleRoleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value={"student"}>Student</MenuItem>
                                <MenuItem value={"teacher"}>Teacher</MenuItem>
                                <MenuItem value={"admin"}>Admin</MenuItem>
                            </Select>
                        </FormControl>
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