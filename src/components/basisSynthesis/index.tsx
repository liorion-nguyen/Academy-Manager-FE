import { StyleBoxIndexFirst, StyleBoxIndexSecond, StyleCircle, StyleColumnGap10, StyleContentCard, StyleDashboardCard, StyleProcessBar, StyleRowGap20, StyleRowGap5, StyleSumCoundCard, StyleTitleCard } from "@/app/style-mui";
import { Box, Grid, Skeleton } from "@mui/material";
import { useSelector } from "react-redux";

export default function BasisSynthesis(props: { data: any }) {
    const detailUsers = props.data;
    const user = useSelector((state: any) => state.user.data);
    const width = useSelector((state: any) => state.display.width);
    return (
        <Grid container
            sx={{
                gap: width === "xs" ? "10px" : '0',
                justifyContent: 'space-between',
                marginBottom: '10px'
            }}
        >
            <StyleDashboardCard item md={3.9} xs={12}>
                <StyleCircle width={(detailUsers?.gender.female / detailUsers?.gender.sum) * 100 || 50} height={(detailUsers?.gender.male / detailUsers?.gender.sum) * 100 || 50}>
                    <StyleProcessBar>
                        <img src="/Images/admin/icon_student.svg" />
                    </StyleProcessBar>
                </StyleCircle>
                <Box>
                    <StyleColumnGap10>
                        <StyleTitleCard>STUDENTS</StyleTitleCard>
                        <StyleRowGap20>
                            <StyleRowGap5>
                                <StyleBoxIndexFirst></StyleBoxIndexFirst>
                                {
                                    detailUsers ? <StyleContentCard>male ({detailUsers.gender.male}%)</StyleContentCard> : <Skeleton width={70} height={20} />
                                }
                            </StyleRowGap5>
                            <StyleRowGap5>
                                <StyleBoxIndexSecond></StyleBoxIndexSecond>
                                {
                                    detailUsers ? <StyleContentCard>Female ({detailUsers.gender.female}%)</StyleContentCard> : <Skeleton width={70} height={20} />
                                }
                            </StyleRowGap5>
                        </StyleRowGap20>
                        {
                            detailUsers ? <StyleSumCoundCard>{detailUsers.gender.sum}</StyleSumCoundCard> : <Skeleton width={60} height={35} />
                        }
                    </StyleColumnGap10>
                </Box>
            </StyleDashboardCard>
            <StyleDashboardCard item md={3.9} xs={12}>
                <StyleCircle width={61} height={39}>
                    <StyleProcessBar>
                        <img src="/Images/admin/icon_staff.svg" />
                    </StyleProcessBar>
                </StyleCircle>
                <Box>
                    <StyleColumnGap10>
                        <StyleTitleCard>Staff</StyleTitleCard>
                        <StyleRowGap20>
                            <StyleRowGap5>
                                <StyleBoxIndexFirst></StyleBoxIndexFirst>
                                {
                                    user ? <StyleContentCard>male (55%)</StyleContentCard> : <Skeleton width={70} height={20} />
                                }
                            </StyleRowGap5>
                            <StyleRowGap5>
                                <StyleBoxIndexSecond></StyleBoxIndexSecond>
                                {
                                    user ? <StyleContentCard>Female (45%)</StyleContentCard> : <Skeleton width={70} height={20} />
                                }
                            </StyleRowGap5>
                        </StyleRowGap20>
                        {
                            user ? <StyleSumCoundCard>308</StyleSumCoundCard> : <Skeleton width={60} height={35} />
                        }
                    </StyleColumnGap10>
                </Box>
            </StyleDashboardCard>
            <StyleDashboardCard item md={3.9} xs={12}>
                <StyleCircle width={61} height={39}>
                    <StyleProcessBar>
                        <img alt="#" src="/Images/admin/icon_subject.svg" />
                    </StyleProcessBar>
                </StyleCircle>
                <Box>
                    <StyleColumnGap10>
                        <StyleTitleCard>Subjects</StyleTitleCard>
                        <StyleRowGap20>
                            <StyleRowGap5>
                                <StyleBoxIndexFirst></StyleBoxIndexFirst>
                                {
                                    user ? <StyleContentCard>Female (45%)</StyleContentCard> : <Skeleton width={70} height={20} />
                                }
                            </StyleRowGap5>
                            <StyleRowGap5>
                                <StyleBoxIndexSecond></StyleBoxIndexSecond>
                                {
                                    user ? <StyleContentCard>Female (45%)</StyleContentCard> : <Skeleton width={70} height={20} />
                                }
                            </StyleRowGap5>
                        </StyleRowGap20>
                        {
                            user ? <StyleSumCoundCard>308</StyleSumCoundCard> : <Skeleton width={60} height={35} />
                        }
                    </StyleColumnGap10>
                </Box>
            </StyleDashboardCard>
        </Grid>
    );
}