import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useDispatch, useSelector } from "react-redux";
import { DrawerActions } from "@/redux/drawer";
import ChatAiExtra from "@/app/ChatAi/extra";

export default function DrawerMessage() {
    const dispatch = useDispatch();

    const toggleDrawer = (newOpen: boolean) => () => {
        dispatch(DrawerActions.setDrawerMessage(newOpen));
    };
    return (
        <Box role="presentation" onClick={toggleDrawer(false)}>
            <ChatAiExtra />
        </Box>
    );
}