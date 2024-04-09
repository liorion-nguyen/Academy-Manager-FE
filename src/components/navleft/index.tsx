import { StyleBoxIconNavLeft, StyleIconNavLeft, StyleImgLeft, StyleNavLeft } from "@/app/style-mui";
import { Box } from "@mui/material";
import Image from "next/image";
import { usePathname } from 'next/navigation'

export default function NavLeft() {
    const Icons = [
        {
            href: "/Overview",
            icon: "/Images/admin/icon_navleft/overview.svg",
        },
        {
            href: "/Student",
            icon: "/Images/admin/icon_navleft/student.svg",
        },
        {
            href: "/Class",
            icon: "/Images/admin/icon_navleft/class.svg",
        },
        {
            href: "#",
            icon: "/Images/admin/icon_navleft/variant.svg",
        },
        {
            href: "/Teacher",
            icon: "/Images/admin/icon_navleft/teacher.svg",
        },
        {
            href: "#",
            icon: "/Images/admin/icon_navleft/users.svg",
        },
        {
            href: "ChatAi",
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
    const pathname = usePathname()

    
    return (
        <StyleNavLeft>
            <StyleBoxIconNavLeft>
                {
                    Icons.map((icon, index) => (
                        <Box key={index}>
                            <a href={icon.href}>
                                <img src={icon.icon} 
                                    style={{
                                        filter: pathname === icon.href ? 'invert(85%) sepia(105%) saturate(4000%) hue-rotate(42deg) brightness(108%) contrast(61%)' : '' 
                                    }}
                                />
                            </a>
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