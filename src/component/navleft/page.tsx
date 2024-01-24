import { StyleBoxIconNavLeft, StyleIconNavLeft, StyleImgLeft, StyleNavLeft } from "@/app/Admin/style-mui";
import { Box } from "@mui/material";

export default function NavLeft() {
    const Icons = [
        {
            href: "#",
            icon: "/Images/admin/icon_navleft/overview.svg",
        },
        {
            href: "/student",
            icon: "/Images/admin/icon_navleft/student.svg",
        },
        {
            href: "#",
            icon: "/Images/admin/icon_navleft/class.svg",
        },
        {
            href: "#",
            icon: "/Images/admin/icon_navleft/variant.svg",
        },
        {
            href: "#",
            icon: "/Images/admin/icon_navleft/teacher.svg",
        },
        {
            href: "#",
            icon: "/Images/admin/icon_navleft/users.svg",
        },
        {
            href: "#",
            icon: "/Images/admin/icon_navleft/messages.svg",
        },
        {
            href: "#",
            icon: "/Images/admin/icon_navleft/finance.svg",
        },
        {
            href: "#",
            icon: "/Images/admin/icon_navleft/fluent.svg",
        },
        {
            href: "#",
            icon: "/Images/admin/icon_navleft/notice.svg",
        },
    ]
    return (
        <StyleNavLeft>
            <StyleBoxIconNavLeft>
                {
                    Icons.map((icon, index) => (
                        <Box key={index}>
                            <img src={icon.icon} />
                        </Box>
                    ))
                }
            </StyleBoxIconNavLeft>
            <StyleIconNavLeft>
                <StyleImgLeft src="/Images/admin/icon_navleft/setting.svg" />
            </StyleIconNavLeft>
        </StyleNavLeft>

    );
}