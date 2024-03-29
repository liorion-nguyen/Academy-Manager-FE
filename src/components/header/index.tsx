import { StyleBoxHeader, StyleHeaderTop, StyleInpSearch, StyleLinkPoint, StyleSearch, StyleTypographyPoint } from "@/app/style-mui";
import { StyleImgLeft, StyleLogo } from "@/app/Login/style-mui";
import { Breadcrumbs } from "@mui/material";
import { usePathname } from "next/navigation";

export default function Header({value}:any) {
    const pathname = usePathname()
    return (
        <StyleBoxHeader width={value}>
            <StyleHeaderTop>
                <StyleLogo>
                    <StyleImgLeft src="/Images/login/Logo.png" />
                </StyleLogo>
                <Breadcrumbs aria-label="breadcrumb"
                    sx={{
                        ".MuiBreadcrumbs-separator": {
                            margin: '0 2px'
                        }
                    }}
                >
                    <StyleLinkPoint
                        underline="hover"
                        color="inherit"
                        href="/"
                    >
                        Administrator
                    </StyleLinkPoint>
                    <StyleTypographyPoint color="text.primary">Dashboard</StyleTypographyPoint>
                </Breadcrumbs>
            </StyleHeaderTop>
            {pathname !== "/Teacher" && pathname !== "/Student" && pathname !== "/ChatAi" &&
            <StyleSearch className="search">
                <img src="/Images/admin/icon_search.svg" />
                <StyleInpSearch type="text" placeholder="Search..." />
            </StyleSearch>}
        </StyleBoxHeader>

    );
}