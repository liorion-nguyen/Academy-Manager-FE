"use client"
import { StyleGridLeft, StyleGridUserNotification, StyleComponent, StyleGridRight } from "../style-mui";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import NavLeft from "@/components/navleft";
import Header from "@/components/header";
import { SpeedInsights } from "@vercel/speed-insights/next";
import MenuUser from "@/components/menuUser/page";
import ChatAiMain from "../ChatAi/main";
import { StyleMain } from "../Login/style-mui";
import PeopleMain from "../People/main";
import PeopleExtra from "../People/extra";
import ClassMain from "../Class/main";
import ClassExtra from "../Class/extra";
import ChatAiExtra from "../ChatAi/extra";
import { GetClass } from "@/api/class";
import UserMain from "../User/main";
import UserExtra from "../User/extra";
import { useDispatch, useSelector } from "react-redux";
import OverviewExtra from "./extra";
import OverviewMain from "./main";
import { DisplayActions } from "@/redux/display";
import HeaderPhone from "@/components/SizePhone/header";

export default function Overview({ params }: any) {
    const [classData, setClassData] = useState<any>(null);
    const dispatch = useDispatch();
    // useEffect(() => {
    //     const handleGetClass = async () => {
    //         const classFake = await GetClass();
    //         setClassData(classFake);
    //     }
    //     handleGetClass();
    // }, [])

    const elementRef = useRef<HTMLDivElement | null>(null);
    const [elementWidth, setElementWidth] = useState<number | null>(null);

    useEffect(() => {
        const updateWidth = () => {
            if (elementRef.current) {
                setElementWidth(elementRef.current.clientWidth);
            }
        };
        updateWidth();
        const resizeListener = () => {
            window.addEventListener('resize', updateWidth);
            return () => {
                window.removeEventListener('resize', updateWidth);
            };
        };
        resizeListener();
    }, [elementRef, elementWidth]);

    const pathname = usePathname();
    const width = useSelector((state: any) => state.display.width);
    const getScreenSize = () => {
        const width = document.documentElement.clientWidth;

        if (width < 576) {
            return 'xs';
        } else if (width < 768) {
            return 'sm';
        } else if (width < 992) {
            return 'md';
        } else if (width < 1200) {
            return 'lg';
        } else {
            return 'xl';
        }
    };
    useEffect(() => {
        if (typeof window !== 'undefined') {
            dispatch(DisplayActions.setWidth(getScreenSize()));
        }
    }, [typeof window !== 'undefined' ? document.documentElement.clientWidth : null])
    return (
        <>
            <SpeedInsights />
            <StyleComponent>
                <StyleMain>
                    <StyleGridUserNotification container spacing={2}>
                        <StyleGridRight item sm={8.75} xs={12} ref={elementRef}>
                            <Header value={elementWidth} />
                            {width === "xs" && pathname !== "/ChatAi" && <HeaderPhone />}
                            {pathname === "/Student" && <PeopleMain people="Student" />}
                            {pathname === "/Teacher" && <PeopleMain people="Teacher" />}
                            {pathname === "/Class" && <ClassMain classSend={classData} />}
                            {pathname === "/ChatAi" && <ChatAiMain />}
                            {pathname === "/User" && <UserMain />}
                            {(pathname === "/Overview") && <OverviewMain />}
                            <NavLeft />
                        </StyleGridRight>
                        <StyleGridLeft item sm={3} xs={12}>
                            {width !== "xs" && <MenuUser />}
                            {pathname === "/Student" && width !== "xs" && <PeopleExtra people="Student" />}
                            {pathname === "/Teacher" && width !== "xs" && <PeopleExtra people="Teacher" />}
                            {pathname === "/ChatAi" && width !== "xs" && <ChatAiExtra />}
                            {pathname === "/Class" && width !== "xs" && <ClassExtra />}
                            {pathname === "/User" && width !== "xs" && <UserExtra />}
                            {pathname === "/Overview" && width !== "xs" && <OverviewExtra />}

                        </StyleGridLeft>
                    </StyleGridUserNotification>
                </StyleMain >

            </StyleComponent>
        </>
    );
}