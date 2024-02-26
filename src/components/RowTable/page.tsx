import { Collapse, IconButton, Switch, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment, useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

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
        note
    };
}
export default function Row(props: { row: ReturnType<typeof createData> }) {
    const { row } = props;
    const [open, setOpen] = useState(false);
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    return (
        <Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="left">{row.learingMethod}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.phone}</TableCell>
                <TableCell align="left">
                    <Switch {...label} checked={row.state} disabled />
                </TableCell>
                <TableCell align="left">
                    {
                        row.complete ? <CheckCircleOutlineIcon /> : <DoNotDisturbAltIcon />
                    }
                </TableCell>
                <TableCell align="left">{row.note}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            Hello
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </Fragment>
    );
}