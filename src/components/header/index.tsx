import { StyleBoxHeader, StyleHeaderTop, StyleInpSearch, StyleLinkPoint, StyleSearch, StyleTypographyPoint } from "@/app/style-mui";
import { StyleImgLeft, StyleLogo } from "@/app/Login/style-mui";
import { Breadcrumbs } from "@mui/material";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { DisplayActions } from "@/redux/display";

export default function Header({value}:any) {
    const pathname = usePathname();
    const dispatch = useDispatch();
    const handleFocus = () => {
        dispatch(DisplayActions.setNavLeft(true));
    }
    return (
        <StyleBoxHeader width={value}>
            <StyleHeaderTop>
                <StyleLogo onFocus={handleFocus} sx={{margin: '0 100px', width: '200px'}}>
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