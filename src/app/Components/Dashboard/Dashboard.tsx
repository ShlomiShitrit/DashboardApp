"use client";
import { Fragment } from "react";
import dynamic from "next/dynamic";
import Grid from "@mui/material/Grid";

import Chart from "../Charts/LineChart";
import Deposits from "../UI/Deposits";
import Orders from "../UI/Orders";
import PaperComp from "./PaperComp";

function Dashboard() {
    const BarsChartNoSSR = dynamic(() => import("../Charts/BarsChart"), {
        ssr: false,
    });

    return (
        <Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} md={8} lg={9}>
                    <PaperComp orders={false} comp={<Chart />} />
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                    <PaperComp orders={false} comp={<Deposits />} />
                </Grid>
                <Grid item xs={12}>
                    <PaperComp orders={false} comp={<BarsChartNoSSR />} />
                </Grid>
                <Grid item xs={12}>
                    <PaperComp orders={true} comp={<Orders />} />
                </Grid>
            </Grid>
        </Fragment>
    );
}
export default Dashboard;
