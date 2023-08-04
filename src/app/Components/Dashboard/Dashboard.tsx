"use client";
import { Fragment } from "react";
import dynamic from "next/dynamic";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import Chart from "../Charts/LineChart";
import Deposits from "../UI/Deposits";
import Orders from "../UI/Orders";
import PaperComp from "./PaperComp";
import PieChart from "../Charts/PieChart";

function Dashboard() {
    const BarsChartNoSSR = dynamic(() => import("../Charts/BarsChart"), {
        ssr: false,
    });

    return (
        <Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} md={8} lg={9}>
                    <PaperComp size="medium" comp={<Chart />} />
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                    <PaperComp size="auto" comp={<Deposits />} />
                </Grid>
                <Grid item xs={12}>
                    <PaperComp size="auto" comp={<BarsChartNoSSR />} />
                </Grid>
                <Grid item xs={12} md={4} lg={7}>
                    <PaperComp size="large" comp={<PieChart />} />
                </Grid>
                <Grid item xs={12}>
                    <PaperComp size="auto" comp={<Orders />} />
                </Grid>
            </Grid>
        </Fragment>
    );
}
export default Dashboard;
