"use client";
import { Fragment } from "react";
import dynamic from "next/dynamic";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Orders";

export default function Dashboard() {
    const BarsChartNoSSR = dynamic(() => import("../Components/BarsChart"), {
        ssr: false,
    });

    return (
        <Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} md={8} lg={9}>
                    <Paper
                        sx={{
                            p: 2,
                            display: "flex",
                            flexDirection: "column",
                            height: 240,
                        }}
                    >
                        <Chart />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                    <Paper
                        sx={{
                            p: 2,
                            display: "flex",
                            flexDirection: "column",
                            height: 240,
                        }}
                    >
                        <Deposits />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper
                        sx={{
                            p: 2,
                            display: "flex",
                            flexDirection: "column",
                            height: 240,
                        }}
                    >
                        <BarsChartNoSSR />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper
                        sx={{
                            p: 2,
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <Orders />
                    </Paper>
                </Grid>
            </Grid>
        </Fragment>
    );
}
